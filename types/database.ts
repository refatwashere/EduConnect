export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      teachers: {
        Row: {
          id: string
          email: string
          name: string
          avatar_url: string | null
          preferences: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          avatar_url?: string | null
          preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          avatar_url?: string | null
          preferences?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          teacher_id: string
          name: string
          description: string | null
          subject: string | null
          grade_level: string | null
          settings: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          teacher_id: string
          name: string
          description?: string | null
          subject?: string | null
          grade_level?: string | null
          settings?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          teacher_id?: string
          name?: string
          description?: string | null
          subject?: string | null
          grade_level?: string | null
          settings?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      students: {
        Row: {
          id: string
          class_id: string
          name: string
          student_id: string | null
          parent_email: string | null
          parent_phone: string | null
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          class_id: string
          name: string
          student_id?: string | null
          parent_email?: string | null
          parent_phone?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          class_id?: string
          name?: string
          student_id?: string | null
          parent_email?: string | null
          parent_phone?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      materials: {
        Row: {
          id: string
          class_id: string
          title: string
          content: string | null
          type: string
          file_url: string | null
          metadata: Json | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          class_id: string
          title: string
          content?: string | null
          type?: string
          file_url?: string | null
          metadata?: Json | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          class_id?: string
          title?: string
          content?: string | null
          type?: string
          file_url?: string | null
          metadata?: Json | null
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      progress_updates: {
        Row: {
          id: string
          student_id: string
          teacher_id: string
          content: string
          type: string
          data: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          student_id: string
          teacher_id: string
          content: string
          type?: string
          data?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          teacher_id?: string
          content?: string
          type?: string
          data?: Json | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}