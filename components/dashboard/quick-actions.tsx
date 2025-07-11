import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function QuickActions() {
  const actions = [
    {
      title: 'Create Class',
      description: 'Start a new class',
      href: '/classes',
      icon: '📚'
    },
    {
      title: 'Add Students',
      description: 'Enroll new students',
      href: '/students',
      icon: '👥'
    },
    {
      title: 'Upload Material',
      description: 'Share resources',
      href: '/materials',
      icon: '📄'
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action) => (
          <Button
            key={action.title}
            asChild
            variant="outline"
            className="w-full justify-start h-auto p-4"
          >
            <Link href={action.href}>
              <div className="flex items-center space-x-3">
                <span className="text-xl">{action.icon}</span>
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-sm text-gray-600">{action.description}</div>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}