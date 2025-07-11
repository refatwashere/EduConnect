'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { apiClient } from '@/lib/api-client'
import { useAuthStore } from '@/stores/auth-store'
import { classSchema, type ClassInput } from '@/lib/validations'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Class {
  id: string
  name: string
  description?: string
  subject?: string
  grade_level?: string
  student_count: number
  created_at: string
}

export default function ClassesPage() {
  const [classes, setClasses] = useState<Class[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const { teacher } = useAuthStore()
  const { toast } = useToast()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ClassInput>({
    resolver: zodResolver(classSchema)
  })

  useEffect(() => {
    fetchClasses()
  }, [teacher?.id])

  const fetchClasses = async () => {
    if (!teacher?.id) return
    
    try {
      const data = await apiClient.getClasses(teacher.id)
      setClasses(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch classes',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: ClassInput) => {
    if (!teacher?.id) return

    try {
      await apiClient.createClass({ ...data, teacher_id: teacher.id })
      toast({
        title: 'Success',
        description: 'Class created successfully!'
      })
      reset()
      setShowForm(false)
      fetchClasses()
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create class',
        variant: 'destructive'
      })
    }
  }

  if (isLoading) {
    return <div className="text-center py-8">Loading classes...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Classes</h1>
          <p className="text-gray-600">Manage your classes and course materials</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Create Class'}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Class</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Class Name *</label>
                <Input {...register('name')} placeholder="e.g., Mathematics 101" />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="text-sm font-medium">Description</label>
                <Input {...register('description')} placeholder="Brief description of the class" />
                {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input {...register('subject')} placeholder="e.g., Mathematics" />
                  {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium">Grade Level</label>
                  <Input {...register('grade_level')} placeholder="e.g., 9th Grade" />
                  {errors.grade_level && <p className="text-sm text-red-500">{errors.grade_level.message}</p>}
                </div>
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Class'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <Card key={cls.id}>
            <CardHeader>
              <CardTitle className="text-lg">{cls.name}</CardTitle>
              {cls.subject && <p className="text-sm text-gray-600">{cls.subject}</p>}
            </CardHeader>
            <CardContent>
              {cls.description && <p className="text-sm mb-3">{cls.description}</p>}
              <div className="flex justify-between text-sm text-gray-600">
                <span>{cls.student_count} students</span>
                {cls.grade_level && <span>{cls.grade_level}</span>}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Created {new Date(cls.created_at).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {classes.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No classes yet</h3>
            <p className="text-gray-600 mb-4">Create your first class to get started with managing students and materials.</p>
            <Button onClick={() => setShowForm(true)}>Create Your First Class</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}