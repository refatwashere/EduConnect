'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { useAuthStore } from '@/stores/auth-store'
import { classSchema, type ClassInput } from '@/lib/validations'
import { API_ROUTES } from '@/lib/constants'

interface CreateClassFormProps {
  onSuccess?: () => void
}

export function CreateClassForm({ onSuccess }: CreateClassFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuthStore()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ClassInput>({
    resolver: zodResolver(classSchema)
  })

  const onSubmit = async (data: ClassInput) => {
    if (!user?.id) {
      toast({
        title: 'Error',
        description: 'You must be logged in to create a class',
        variant: 'destructive'
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(API_ROUTES.CLASSES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          teacher_id: user.id
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to create class')
      }

      const newClass = await response.json()
      
      toast({
        title: 'Success',
        description: 'Class created successfully!'
      })

      reset()
      onSuccess?.()
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create class',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Class</CardTitle>
        <CardDescription>
          Add a new class to your teaching schedule
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Class Name *
            </label>
            <Input
              id="name"
              placeholder="e.g., Mathematics 101"
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Input
              id="description"
              placeholder="Brief description of the class"
              {...register('description')}
              className={errors.description ? 'border-red-500' : ''}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="e.g., Mathematics"
                {...register('subject')}
                className={errors.subject ? 'border-red-500' : ''}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="grade_level" className="text-sm font-medium">
                Grade Level
              </label>
              <Input
                id="grade_level"
                placeholder="e.g., Grade 10"
                {...register('grade_level')}
                className={errors.grade_level ? 'border-red-500' : ''}
              />
              {errors.grade_level && (
                <p className="text-sm text-red-500">{errors.grade_level.message}</p>
              )}
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Creating...' : 'Create Class'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}