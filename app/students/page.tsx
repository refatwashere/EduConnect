'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { apiClient } from '@/lib/api-client'
import { useAuthStore } from '@/stores/auth-store'
import { studentSchema, type StudentInput } from '@/lib/validations'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Student {
  id: string
  name: string
  student_id?: string
  class_id: string
  parent_email?: string
  parent_phone?: string
  created_at: string
}

interface Class {
  id: string
  name: string
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [classes, setClasses] = useState<Class[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const { teacher } = useAuthStore()
  const { toast } = useToast()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<StudentInput>({
    resolver: zodResolver(studentSchema)
  })

  useEffect(() => {
    fetchData()
  }, [teacher?.id])

  const fetchData = async () => {
    if (!teacher?.id) return
    
    try {
      const [studentsData, classesData] = await Promise.all([
        apiClient.getStudents(),
        apiClient.getClasses(teacher.id)
      ])
      setStudents(studentsData)
      setClasses(classesData)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch data',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: StudentInput) => {
    try {
      await apiClient.createStudent({ ...data, class_id: classes[0]?.id })
      toast({
        title: 'Success',
        description: 'Student added successfully!'
      })
      reset()
      setShowForm(false)
      fetchData()
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to add student',
        variant: 'destructive'
      })
    }
  }

  if (isLoading) {
    return <div className="text-center py-8">Loading students...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-gray-600">Manage student enrollment and information</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} disabled={classes.length === 0}>
          {showForm ? 'Cancel' : 'Add Student'}
        </Button>
      </div>

      {classes.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-600">Create a class first before adding students.</p>
            <Button asChild className="mt-4">
              <a href="/classes">Create Class</a>
            </Button>
          </CardContent>
        </Card>
      )}

      {showForm && classes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Student</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Student Name *</label>
                <Input {...register('name')} placeholder="Enter student name" />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="text-sm font-medium">Student ID</label>
                <Input {...register('student_id')} placeholder="e.g., STU001" />
                {errors.student_id && <p className="text-sm text-red-500">{errors.student_id.message}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Parent Email</label>
                  <Input {...register('parent_email')} type="email" placeholder="parent@example.com" />
                  {errors.parent_email && <p className="text-sm text-red-500">{errors.parent_email.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium">Parent Phone</label>
                  <Input {...register('parent_phone')} placeholder="+1234567890" />
                  {errors.parent_phone && <p className="text-sm text-red-500">{errors.parent_phone.message}</p>}
                </div>
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add Student'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => {
          const studentClass = classes.find(c => c.id === student.class_id)
          return (
            <Card key={student.id}>
              <CardHeader>
                <CardTitle className="text-lg">{student.name}</CardTitle>
                {student.student_id && <p className="text-sm text-gray-600">ID: {student.student_id}</p>}
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Class:</span> {studentClass?.name || 'Unknown'}</p>
                  {student.parent_email && (
                    <p><span className="font-medium">Parent:</span> {student.parent_email}</p>
                  )}
                  {student.parent_phone && (
                    <p><span className="font-medium">Phone:</span> {student.parent_phone}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-3">
                    Added {new Date(student.created_at).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {students.length === 0 && classes.length > 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No students yet</h3>
            <p className="text-gray-600 mb-4">Add your first student to get started.</p>
            <Button onClick={() => setShowForm(true)}>Add Your First Student</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}