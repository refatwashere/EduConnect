import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required')
})

export const classSchema = z.object({
  name: z.string().min(1, 'Class name is required').max(100, 'Class name too long'),
  description: z.string().max(500, 'Description too long').optional(),
  subject: z.string().max(50, 'Subject name too long').optional(),
  grade_level: z.string().max(20, 'Grade level too long').optional()
})

export const studentSchema = z.object({
  name: z.string().min(1, 'Student name is required').max(100, 'Name too long'),
  student_id: z.string().max(50, 'Student ID too long').optional(),
  parent_email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  parent_phone: z.string().max(20, 'Phone number too long').optional()
})

export const materialSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  content: z.string().optional(),
  type: z.enum(['document', 'video', 'image', 'link', 'other']).default('document'),
  file_url: z.string().url('Please enter a valid URL').optional().or(z.literal(''))
})

export type LoginInput = z.infer<typeof loginSchema>
export type ClassInput = z.infer<typeof classSchema>
export type StudentInput = z.infer<typeof studentSchema>
export type MaterialInput = z.infer<typeof materialSchema>