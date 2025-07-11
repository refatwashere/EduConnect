'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { apiClient } from '@/lib/api-client'
import { useAuthStore } from '@/stores/auth-store'
import Link from 'next/link'

interface Class {
  id: string
  name: string
  subject: string
  student_count: number
  updated_at: string
}

export function DashboardOverview() {
  const [classes, setClasses] = useState<Class[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { teacher } = useAuthStore()

  useEffect(() => {
    const fetchClasses = async () => {
      if (!teacher?.id) return
      
      try {
        const data = await apiClient.getClasses(teacher.id)
        setClasses(data)
      } catch (error) {
        console.error('Failed to fetch classes:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchClasses()
  }, [teacher?.id])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">Loading...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your Classes</CardTitle>
        <Button asChild size="sm">
          <Link href="/classes">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {classes.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No classes yet. Create your first class to get started!</p>
            <Button asChild className="mt-4">
              <Link href="/classes">Create Class</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {classes.map((cls) => (
              <div key={cls.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{cls.name}</h3>
                  <p className="text-sm text-gray-600">{cls.subject}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{cls.student_count} students</p>
                  <p className="text-xs text-gray-500">
                    Updated {new Date(cls.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}