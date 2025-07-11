'use client'

import { useAuthStore } from '@/stores/auth-store'
import { Button } from '@/components/ui/button'

export function Header() {
  const { teacher, signOut } = useAuthStore()

  const handleSignOut = async () => {
    try {
      await signOut()
      window.location.href = '/'
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {teacher?.name ? `Welcome back, ${teacher.name}` : 'EduConnect'}
          </h2>
          <p className="text-sm text-gray-600">
            {teacher?.subject && `${teacher.subject} Teacher`}
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          {teacher && (
            <div className="text-right">
              <p className="text-sm font-medium">{teacher.email}</p>
              <Button 
                onClick={handleSignOut}
                variant="ghost" 
                size="sm"
                className="text-xs"
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}