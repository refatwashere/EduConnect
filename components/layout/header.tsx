'use client'

import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth-store'
import { LogOut, User } from 'lucide-react'

export function Header() {
  const { teacher, signOut } = useAuthStore()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">EduConnect</h1>
          <p className="text-sm text-gray-600">Educational Management Platform</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {teacher?.name || 'Teacher'}
            </span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>
    </header>
  )
}