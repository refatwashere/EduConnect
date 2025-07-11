import { NextRequest, NextResponse } from 'next/server'
import { mockClasses } from '@/lib/mock-data'
import { classSchema } from '@/lib/validations'

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
    
    const validatedData = classSchema.parse(body)
    
    if (!body.teacher_id) {
      return NextResponse.json(
        { error: 'Teacher ID is required' },
        { status: 400 }
      )
    }

    const newClass = {
      id: Date.now().toString(),
      ...validatedData,
      teacher_id: body.teacher_id,
      student_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return NextResponse.json(newClass, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}