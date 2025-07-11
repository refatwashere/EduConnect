export interface Teacher {
  id: string
  email: string
  name: string
  avatar_url?: string
  preferences?: Record<string, any>
  created_at: string
  updated_at: string
}

export interface Class {
  id: string
  teacher_id: string
  name: string
  description?: string
  subject?: string
  grade_level?: string
  settings?: Record<string, any>
  created_at: string
  updated_at: string
  students?: Student[]
  materials?: Material[]
}

export interface Student {
  id: string
  class_id: string
  name: string
  student_id?: string
  parent_email?: string
  parent_phone?: string
  metadata?: Record<string, any>
  created_at: string
  updated_at: string
  progress_updates?: ProgressUpdate[]
  attendance?: AttendanceRecord[]
}

export interface Material {
  id: string
  class_id: string
  title: string
  content?: string
  type: 'document' | 'link' | 'video' | 'image' | 'other'
  file_url?: string
  metadata?: Record<string, any>
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface ProgressUpdate {
  id: string
  student_id: string
  teacher_id: string
  content: string
  type: 'general' | 'academic' | 'behavioral' | 'achievement'
  data?: Record<string, any>
  created_at: string
}

export interface Message {
  id: string
  sender_id: string
  recipient_id: string
  subject?: string
  content: string
  is_read: boolean
  created_at: string
}

export interface AttendanceRecord {
  id: string
  student_id: string
  attendance_date: string
  status: 'present' | 'absent' | 'late' | 'excused'
  notes?: string
  created_at: string
}