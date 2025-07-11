'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth-store'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Classes', href: '/classes', icon: '📚' },
  { name: 'Students', href: '/students', icon: '👥' },
  { name: 'Materials', href: '/materials', icon: '📄' }
]

export function Sidebar() {
  const pathname = usePathname()
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
    <div className="flex flex-col h-full bg-white border-r">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">EduConnect</h1>
        {teacher && (
          <p className="text-sm text-gray-600 mt-1">Welcome, {teacher.name}</p>
        )}
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 border-t">
        <Button 
          onClick={handleSignOut}
          variant="outline" 
          className="w-full"
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}