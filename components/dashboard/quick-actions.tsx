'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Upload, MessageSquare, Users } from 'lucide-react'

export function QuickActions() {
  const actions = [
    {
      title: 'Add Student',
      description: 'Enroll a new student',
      icon: Users,
      href: '/students/new',
    },
    {
      title: 'Upload Material',
      description: 'Share new content',
      icon: Upload,
      href: '/materials/upload',
    },
    {
      title: 'Send Message',
      description: 'Contact parents',
      icon: MessageSquare,
      href: '/messages/new',
    },
    {
      title: 'Create Class',
      description: 'Start a new class',
      icon: Plus,
      href: '/classes/new',
    },
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
            variant="outline"
            className="w-full justify-start h-auto p-4"
            asChild
          >
            <a href={action.href}>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <action.icon className="h-4 w-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">{action.title}</p>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </div>
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}