'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { apiClient } from '@/lib/api-client'
import { useAuthStore } from '@/stores/auth-store'

interface Stats {
  totalClasses: number
  totalStudents: number
  totalMaterials: number
}

export function StatsCards() {
  const [stats, setStats] = useState<Stats>({ totalClasses: 0, totalStudents: 0, totalMaterials: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const { teacher } = useAuthStore()

  useEffect(() => {
    const fetchStats = async () => {
      if (!teacher?.id) return
      
      try {
        const [classes, students, materials] = await Promise.all([
          apiClient.getClasses(teacher.id),
          apiClient.getStudents(),
          apiClient.getMaterials(undefined, teacher.id)
        ])

        setStats({
          totalClasses: classes.length,
          totalStudents: students.length,
          totalMaterials: materials.length
        })
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [teacher?.id])

  const cards = [
    { title: 'Total Classes', value: stats.totalClasses, icon: '📚' },
    { title: 'Total Students', value: stats.totalStudents, icon: '👥' },
    { title: 'Materials', value: stats.totalMaterials, icon: '📄' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <span className="text-2xl">{card.icon}</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? '...' : card.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}