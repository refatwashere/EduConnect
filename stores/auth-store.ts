import { create } from 'zustand'
import { supabase } from '@/lib/supabase'
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) throw error
      
      if (data.user) {
        // Fetch teacher profile
        const { data: teacherData } = await supabase
          .from('teachers')
          .select('*')
          .eq('id', data.user.id)
          .single()
        
        set({ user: data.user, teacher: teacherData })
      }
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