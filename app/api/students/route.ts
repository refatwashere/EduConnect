import { NextRequest, NextResponse } from 'next/server'
import { mockStudents } from '@/lib/mock-data'
import { studentSchema } from '@/lib/validations'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const classId = searchParams.get('class_id')

    if (classId) {
      const students = mockStudents.filter(s => s.class_id === classId)
      return NextResponse.json(students)
    }

    return NextResponse.json(mockStudents)
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
    const validatedData = studentSchema.parse(body)
    
    if (!body.class_id) {
      return NextResponse.json(
        { error: 'Class ID is required' },
        { status: 400 }
      )
    }

    const newStudent = {
      id: Date.now().toString(),
      ...validatedData,
      class_id: body.class_id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return NextResponse.json(newStudent, { status: 201 })
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