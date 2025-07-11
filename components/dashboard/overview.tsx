'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DashboardOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Class Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-blue-900">Mathematics 101</h3>
              <p className="text-sm text-blue-700">25 students • 12 materials</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-600">Last updated</p>
              <p className="text-xs text-blue-500">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-green-900">English Literature</h3>
              <p className="text-sm text-green-700">18 students • 8 materials</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-green-600">Last updated</p>
              <p className="text-xs text-green-500">1 day ago</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-purple-900">Science Lab</h3>
              <p className="text-sm text-purple-700">22 students • 15 materials</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-purple-600">Last updated</p>
              <p className="text-xs text-purple-500">3 hours ago</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}