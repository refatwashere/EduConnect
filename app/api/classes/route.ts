import { NextRequest, NextResponse } from 'next/server'

const mockClasses = [
  {
    id: '1',
    name: 'Mathematics 101',
    description: 'Basic mathematics course',
    subject: 'Mathematics',
    grade_level: '9th Grade',
    teacher_id: 'demo-teacher-id',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Algebra Fundamentals',
    description: 'Introduction to algebraic concepts',
    subject: 'Mathematics',
    grade_level: '10th Grade',
    teacher_id: 'demo-teacher-id',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const teacherId = searchParams.get('teacher_id')

    if (!teacherId) {
      return NextResponse.json(
        { error: 'Teacher ID is required' },
        { status: 400 }
      )
    }

    const classes = mockClasses.filter(c => c.teacher_id === teacherId)
    return NextResponse.json(classes)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (!body.teacher_id) {
      return NextResponse.json(
        { error: 'Teacher ID is required' },
        { status: 400 }
      )
    }

    const newClass = {
      id: Date.now().toString(),
      ...body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return NextResponse.json(newClass, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}