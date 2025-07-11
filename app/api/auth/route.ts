import { NextRequest, NextResponse } from 'next/server'
import { DEFAULT_CREDENTIALS } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (email === DEFAULT_CREDENTIALS.email && password === DEFAULT_CREDENTIALS.password) {
      const mockUser = {
        id: 'demo-teacher-id',
        email: DEFAULT_CREDENTIALS.email,
        name: 'Demo Teacher',
        role: 'teacher'
      }

      return NextResponse.json({
        success: true,
        user: mockUser,
        message: 'Login successful'
      })
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    )
  }
}