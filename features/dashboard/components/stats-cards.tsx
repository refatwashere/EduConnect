'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase-client'
import { useAuthStore } from '@/stores/auth-store'

interface Stats {
  totalClasses: number
  totalStudents: number
  totalMaterials: number
  activeClasses: number
}

export function StatsCards() {
  const [stats, setStats] = useState<Stats>({
    totalClasses: 0,
    totalStudents: 0,
    totalMaterials: 0,
    activeClasses: 0
  })
  const [loading, setLoading] = useState(true)
  const { user } = useAuthStore()

  useEffect(() => {
    if (user) {
      fetchStats()
    }
  }, [user])

  const fetchStats = async () => {
    try {
      const [classesRes, studentsRes, materialsRes] = await Promise.all([
        supabase.from('classes').select('id', { count: 'exact' }).eq('teacher_id', user?.id),
        supabase.from('students').select('id', { count: 'exact' }),
        supabase.from('materials').select('id', { count: 'exact' })
      ])

      setStats({
        totalClasses: classesRes.count || 0,
        totalStudents: studentsRes.count || 0,
        totalMaterials: materialsRes.count || 0,
        activeClasses: classesRes.count || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Total Classes',
      value: stats.totalClasses,
      description: 'Active classes',
      color: 'blue'
    },
    {
      title: 'Total Students',
      value: stats.totalStudents,
      description: 'Enrolled students',
      color: 'green'
    },
    {
      title: 'Materials Shared',
      value: stats.totalMaterials,
      description: 'Learning resources',
      color: 'purple'
    },
    {
      title: 'Active Classes',
      value: stats.activeClasses,
      description: 'Currently running',
      color: 'orange'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? (
                <div className="animate-pulse h-8 w-12 bg-gray-200 rounded"></div>
              ) : (
                stat.value
              )}
            </div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}