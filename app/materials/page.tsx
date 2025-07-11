'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { apiClient } from '@/lib/api-client'
import { useAuthStore } from '@/stores/auth-store'
import { materialSchema, type MaterialInput } from '@/lib/validations'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface Material {
  id: string
  title: string
  content?: string
  type: 'document' | 'video' | 'image' | 'link' | 'other'
  class_id: string
  file_url?: string
  created_at: string
}

interface Class {
  id: string
  name: string
}

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([])
  const [classes, setClasses] = useState<Class[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const { teacher } = useAuthStore()
  const { toast } = useToast()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<MaterialInput>({
    resolver: zodResolver(materialSchema)
  })

  useEffect(() => {
    fetchData()
  }, [teacher?.id])

  const fetchData = async () => {
    if (!teacher?.id) return
    
    try {
      const [materialsData, classesData] = await Promise.all([
        apiClient.getMaterials(undefined, teacher.id),
        apiClient.getClasses(teacher.id)
      ])
      setMaterials(materialsData)
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

  const onSubmit = async (data: MaterialInput) => {
    if (!teacher?.id) return

    try {
      await apiClient.createMaterial({ 
        ...data, 
        class_id: classes[0]?.id,
        teacher_id: teacher.id 
      })
      toast({
        title: 'Success',
        description: 'Material added successfully!'
      })
      reset()
      setShowForm(false)
      fetchData()
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to add material',
        variant: 'destructive'
      })
    }
  }

  const getTypeIcon = (type: string) => {
    const icons = {
      document: '📄',
      video: '🎥',
      image: '🖼️',
      link: '🔗',
      other: '📎'
    }
    return icons[type as keyof typeof icons] || '📎'
  }

  if (isLoading) {
    return <div className="text-center py-8">Loading materials...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Materials</h1>
          <p className="text-gray-600">Share resources and course materials</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} disabled={classes.length === 0}>
          {showForm ? 'Cancel' : 'Add Material'}
        </Button>
      </div>

      {classes.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-600">Create a class first before adding materials.</p>
            <Button asChild className="mt-4">
              <a href="/classes">Create Class</a>
            </Button>
          </CardContent>
        </Card>
      )}

      {showForm && classes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Material</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Title *</label>
                <Input {...register('title')} placeholder="Enter material title" />
                {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
              </div>
              
              <div>
                <label className="text-sm font-medium">Content</label>
                <textarea 
                  {...register('content')} 
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="Brief description or content"
                />
                {errors.content && <p className="text-sm text-red-500">{errors.content.message}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <select {...register('type')} className="w-full p-2 border rounded-md">
                    <option value="document">Document</option>
                    <option value="video">Video</option>
                    <option value="image">Image</option>
                    <option value="link">Link</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.type && <p className="text-sm text-red-500">{errors.type.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium">File URL</label>
                  <Input {...register('file_url')} placeholder="https://example.com/file" />
                  {errors.file_url && <p className="text-sm text-red-500">{errors.file_url.message}</p>}
                </div>
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add Material'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => {
          const materialClass = classes.find(c => c.id === material.class_id)
          return (
            <Card key={material.id}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{getTypeIcon(material.type)}</span>
                  <CardTitle className="text-lg">{material.title}</CardTitle>
                </div>
                <p className="text-sm text-gray-600">Class: {materialClass?.name || 'Unknown'}</p>
              </CardHeader>
              <CardContent>
                {material.content && (
                  <p className="text-sm mb-3">{material.content}</p>
                )}
                {material.file_url && (
                  <a 
                    href={material.file_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Resource →
                  </a>
                )}
                <p className="text-xs text-gray-500 mt-3">
                  Added {new Date(material.created_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {materials.length === 0 && classes.length > 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No materials yet</h3>
            <p className="text-gray-600 mb-4">Add your first material to share with students.</p>
            <Button onClick={() => setShowForm(true)}>Add Your First Material</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}