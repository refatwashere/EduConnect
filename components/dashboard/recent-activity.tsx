import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RecentActivity() {
  const activities = [
    {
      id: '1',
      action: 'Created class',
      target: 'Mathematics 101',
      time: '2 hours ago'
    },
    {
      id: '2',
      action: 'Added material',
      target: 'Chapter 1 Notes',
      time: '1 day ago'
    },
    {
      id: '3',
      action: 'Enrolled student',
      target: 'John Smith',
      time: '2 days ago'
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.action}</span>{' '}
                  <span className="text-gray-600">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}