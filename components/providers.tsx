'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/stores/auth-store'
import { supabase } from '@/lib/supabase'

export function Providers({ children }: { children: React.ReactNode }) {
  const { initialize, setUser, setTeacher } = useAuthStore()

  useEffect(() => {
    // Initialize auth state
    initialize()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const { data: teacherData } = await supabase
          .from('teachers')
          .select('*')
          .eq('id', session.user.id)
          .single()
        
        setUser(session.user)
        setTeacher(teacherData)
      } else {
        setUser(null)
        setTeacher(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [initialize, setUser, setTeacher])

  return <>{children}</>
}