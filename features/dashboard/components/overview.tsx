'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase-client'
import { useAuthStore } from '@/stores/auth-store'

interface Class {
  id: string
  name: string
  description: string
  updated_at: string
}

export function DashboardOverview() {
  const [classes, setClasses] = useState<Class[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuthStore()

  useEffect(() => {
    if (user) {
      fetchClasses()
    }
  }, [user])

  const fetchClasses = async () => {
    try {
      const { data, error } = await supabase
        .from('classes')
        .select('id, name, description, updated_at')
        .eq('teacher_id', user?.id)
        .order('updated_at', { ascending: false })
        .limit(3)

      if (error) throw error
      setClasses(data || [])
    } catch (error) {
      console.error('Error fetching classes:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse h-16 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Classes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {classes.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No classes yet. Create your first class to get started!</p>
            </div>
          ) : (
            classes.map((cls, index) => {
              const colors = ['blue', 'green', 'purple']
              const color = colors[index % colors.length]
              
              return (
                <div
                  key={cls.id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    color === 'blue' ? 'bg-blue-50 border-blue-100' :
                    color === 'green' ? 'bg-green-50 border-green-100' :
                    'bg-purple-50 border-purple-100'
                  }`}
                >
                  <div>
                    <h3 className={`font-semibold ${
                      color === 'blue' ? 'text-blue-900' :
                      color === 'green' ? 'text-green-900' :
                      'text-purple-900'
                    }`}>{cls.name}</h3>
                    <p className={`text-sm ${
                      color === 'blue' ? 'text-blue-700' :
                      color === 'green' ? 'text-green-700' :
                      'text-purple-700'
                    }`}>
                      {cls.description || 'No description'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${
                      color === 'blue' ? 'text-blue-600' :
                      color === 'green' ? 'text-green-600' :
                      'text-purple-600'
                    }`}>Last updated</p>
                    <p className={`text-xs ${
                      color === 'blue' ? 'text-blue-500' :
                      color === 'green' ? 'text-green-500' :
                      'text-purple-500'
                    }`}>
                      {new Date(cls.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}