'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/constants'

const navigation = [
  {
    name: 'Dashboard',
    href: ROUTES.DASHBOARD,
    icon: '📊'
  },
  {
    name: 'Classes',
    href: ROUTES.CLASSES,
    icon: '📚'
  },
  {
    name: 'Students',
    href: ROUTES.STUDENTS,
    icon: '👥'
  },
  {
    name: 'Materials',
    href: ROUTES.MATERIALS,
    icon: '📄'
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-100 text-blue-900 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}