'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth-store'
import { useToast } from '@/hooks/use-toast'
import { APP_CONFIG, ROUTES } from '@/lib/constants'

export function Header() {
  const { user, teacher, signOut } = useAuthStore()
  const { toast } = useToast()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      toast({
        title: 'Success',
        description: 'Signed out successfully'
      })
      router.push(ROUTES.HOME)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to sign out',
        variant: 'destructive'
      })
    }
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-900">{APP_CONFIG.name}</h1>
            <span className="text-sm text-gray-500">v{APP_CONFIG.version}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {teacher && (
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{teacher.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            )}
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="text-gray-600 hover:text-gray-900"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}