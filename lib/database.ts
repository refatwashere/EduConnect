import { supabase } from './supabase'
import { sqliteOps } from './sqlite'

// Database adapter that switches between Supabase and SQLite
export class DatabaseAdapter {
  private useOffline: boolean

  constructor() {
    this.useOffline = process.env.NODE_ENV === 'development' && process.env.USE_OFFLINE_DB === 'true'
  }

  // Teachers
  async getTeacher(id: string) {
    if (this.useOffline) {
      return sqliteOps.getTeacher(id)
    }
    
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  }

  async getTeacherByEmail(email: string) {
    if (this.useOffline) {
      return sqliteOps.getTeacherByEmail(email)
    }
    
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('email', email)
      .single()
    
    if (error) throw error
    return data
  }

  async createTeacher(teacher: any) {
    if (this.useOffline) {
      return sqliteOps.createTeacher(teacher)
    }
    
    const { data, error } = await supabase
      .from('teachers')
      .insert(teacher)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  // Classes
  async getClasses(teacherId: string) {
    if (this.useOffline) {
      return sqliteOps.getClasses(teacherId)
    }
    
    const { data, error } = await supabase
      .from('classes')
      .select('*')
      .eq('teacher_id', teacherId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }

  async createClass(classData: any) {
    if (this.useOffline) {
      return sqliteOps.createClass(classData)
    }
    
    const { data, error } = await supabase
      .from('classes')
      .insert(classData)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  // Students
  async getStudents(classId: string) {
    if (this.useOffline) {
      return sqliteOps.getStudents(classId)
    }
    
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .eq('class_id', classId)
      .order('name')
    
    if (error) throw error
    return data
  }

  async createStudent(student: any) {
    if (this.useOffline) {
      return sqliteOps.createStudent(student)
    }
    
    const { data, error } = await supabase
      .from('students')
      .insert(student)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  // Materials
  async getMaterials(classId: string) {
    if (this.useOffline) {
      return sqliteOps.getMaterials(classId)
    }
    
    const { data, error } = await supabase
      .from('materials')
      .select('*')
      .eq('class_id', classId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }

  async createMaterial(material: any) {
    if (this.useOffline) {
      return sqliteOps.createMaterial(material)
    }
    
    const { data, error } = await supabase
      .from('materials')
      .insert(material)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  // Progress Updates
  async getProgressUpdates(studentId: string) {
    if (this.useOffline) {
      return sqliteOps.getProgressUpdates(studentId)
    }
    
    const { data, error } = await supabase
      .from('progress_updates')
      .select('*')
      .eq('student_id', studentId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }

  async createProgressUpdate(update: any) {
    if (this.useOffline) {
      return sqliteOps.createProgressUpdate(update)
    }
    
    const { data, error } = await supabase
      .from('progress_updates')
      .insert(update)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
}

export const db = new DatabaseAdapter()