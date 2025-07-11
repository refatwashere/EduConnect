'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDateTime } from '@/lib/utils'

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'student_update',
      message: 'Updated progress for John Smith',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      class: 'Mathematics 101',
    },
    {
      id: 2,
      type: 'material_upload',
      message: 'Uploaded new assignment: Chapter 5 Quiz',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      class: 'English Literature',
    },
    {
      id: 3,
      type: 'message_sent',
      message: 'Sent message to Sarah Johnson\'s parents',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      class: 'Science Lab',
    },
    {
      id: 4,
      type: 'student_added',
      message: 'Added new student: Mike Wilson',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      class: 'Mathematics 101',
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'student_update':
        return '📊'
      case 'material_upload':
        return '📄'
      case 'message_sent':
        return '💬'
      case 'student_added':
        return '👤'
      default:
        return '📝'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="text-lg">{getActivityIcon(activity.type)}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500">{activity.class}</p>
                <p className="text-xs text-gray-400">
                  {formatDateTime(activity.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}