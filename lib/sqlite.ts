import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

let db: Database.Database | null = null

export function initSQLite() {
  if (db) return db

  // Create data directory if it doesn't exist
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  const dbPath = path.join(dataDir, 'educonnect.db')
  db = new Database(dbPath)
  
  // Enable foreign keys
  db.pragma('foreign_keys = ON')
  
  // Initialize schema if database is empty
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all()
  if (tables.length === 0) {
    initializeSchema()
  }
  
  return db
}

function initializeSchema() {
  if (!db) return

  const schemaPath = path.join(process.cwd(), 'database', 'sqlite-schema.sql')
  const schema = fs.readFileSync(schemaPath, 'utf8')
  
  // Execute schema
  db.exec(schema)
}

export function getDB() {
  if (!db) {
    return initSQLite()
  }
  return db
}

// Database operations
export const sqliteOps = {
  // Teachers
  getTeacher: (id: string) => {
    const db = getDB()
    return db.prepare('SELECT * FROM teachers WHERE id = ?').get(id)
  },
  
  getTeacherByEmail: (email: string) => {
    const db = getDB()
    return db.prepare('SELECT * FROM teachers WHERE email = ?').get(email)
  },
  
  createTeacher: (teacher: any) => {
    const db = getDB()
    return db.prepare(`
      INSERT INTO teachers (email, name, avatar_url, preferences)
      VALUES (?, ?, ?, ?)
    `).run(teacher.email, teacher.name, teacher.avatar_url, JSON.stringify(teacher.preferences || {}))
  },

  // Classes
  getClasses: (teacherId: string) => {
    const db = getDB()
    return db.prepare('SELECT * FROM classes WHERE teacher_id = ? ORDER BY created_at DESC').all(teacherId)
  },
  
  createClass: (classData: any) => {
    const db = getDB()
    return db.prepare(`
      INSERT INTO classes (teacher_id, name, description, subject, grade_level, settings)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      classData.teacher_id,
      classData.name,
      classData.description,
      classData.subject,
      classData.grade_level,
      JSON.stringify(classData.settings || {})
    )
  },

  // Students
  getStudents: (classId: string) => {
    const db = getDB()
    return db.prepare('SELECT * FROM students WHERE class_id = ? ORDER BY name').all(classId)
  },
  
  createStudent: (student: any) => {
    const db = getDB()
    return db.prepare(`
      INSERT INTO students (class_id, name, student_id, parent_email, parent_phone, metadata)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      student.class_id,
      student.name,
      student.student_id,
      student.parent_email,
      student.parent_phone,
      JSON.stringify(student.metadata || {})
    )
  },

  // Materials
  getMaterials: (classId: string) => {
    const db = getDB()
    return db.prepare('SELECT * FROM materials WHERE class_id = ? ORDER BY created_at DESC').all(classId)
  },
  
  createMaterial: (material: any) => {
    const db = getDB()
    return db.prepare(`
      INSERT INTO materials (class_id, title, content, type, file_url, metadata, is_published)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      material.class_id,
      material.title,
      material.content,
      material.type,
      material.file_url,
      JSON.stringify(material.metadata || {}),
      material.is_published ? 1 : 0
    )
  },

  // Progress Updates
  getProgressUpdates: (studentId: string) => {
    const db = getDB()
    return db.prepare('SELECT * FROM progress_updates WHERE student_id = ? ORDER BY created_at DESC').all(studentId)
  },
  
  createProgressUpdate: (update: any) => {
    const db = getDB()
    return db.prepare(`
      INSERT INTO progress_updates (student_id, teacher_id, content, type, data)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      update.student_id,
      update.teacher_id,
      update.content,
      update.type,
      JSON.stringify(update.data || {})
    )
  }
}