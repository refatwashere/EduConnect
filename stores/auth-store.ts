import { create } from 'zustand'
import { apiClient } from '@/lib/api-client'
import type { User } from '@supabase/supabase-js'
import type { Teacher } from '@/types'

interface AuthState {
  user: User | null
  teacher: Teacher | null
  isLoading: boolean
  isInitialized: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  initialize: () => Promise<void>
  setUser: (user: User | null) => void
  setTeacher: (teacher: Teacher | null) => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  teacher: null,
  isLoading: false,
  isInitialized: false,

  signIn: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      const result = await apiClient.login(email, password)
      
      if (!result.success) {
        throw new Error(result.message || 'Login failed')
      }
      
      const mockTeacher = {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
        subject: 'Mathematics',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
      
      set({ 
        user: result.user as any, 
        teacher: mockTeacher
      })
    } catch (error) {
      console.error('Sign in error:', error)
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  signOut: async () => {
    set({ isLoading: true })
    try {
      await supabase.auth.signOut()
      set({ user: null, teacher: null })
    } catch (error) {
      console.error('Sign out error:', error)
      throw error
    } finally {
      set({ isLoading: false })
    }
  },

  initialize: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.user) {
        const { data: teacherData } = await supabase
          .from('teachers')
          .select('*')
          .eq('id', session.user.id)
          .single()
        
        set({ user: session.user, teacher: teacherData })
      }
    } catch (error) {
      console.error('Initialize auth error:', error)
    } finally {
      set({ isInitialized: true })
    }
  },

  setUser: (user: User | null) => set({ user }),
  setTeacher: (teacher: Teacher | null) => set({ teacher }),
}))