export const APP_CONFIG = {
  name: 'EduConnect',
  version: '2.0.0',
  description: 'Modern Educational Management Platform',
  url: 'https://edu-connect-delta.vercel.app',
  github: 'https://github.com/refatwashere/EduConnect'
} as const

export const DEFAULT_CREDENTIALS = {
  email: 'teacher@school.edu',
  password: 'password'
} as const

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  CLASSES: '/classes',
  STUDENTS: '/students',
  MATERIALS: '/materials',
  AUTH: '/auth'
} as const

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    ME: '/api/auth/me'
  },
  CLASSES: '/api/classes',
  STUDENTS: '/api/students',
  MATERIALS: '/api/materials'
} as const