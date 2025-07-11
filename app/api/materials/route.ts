import { NextRequest, NextResponse } from 'next/server'
import { mockMaterials } from '@/lib/mock-data'
import { materialSchema } from '@/lib/validations'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const classId = searchParams.get('class_id')
    const teacherId = searchParams.get('teacher_id')

    let materials = mockMaterials

    if (classId) {
      materials = materials.filter(m => m.class_id === classId)
    }
    
    if (teacherId) {
      materials = materials.filter(m => m.teacher_id === teacherId)
    }

    return NextResponse.json(materials)
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
    const validatedData = materialSchema.parse(body)
    
    if (!body.class_id || !body.teacher_id) {
      return NextResponse.json(
        { error: 'Class ID and Teacher ID are required' },
        { status: 400 }
      )
    }

    const newMaterial = {
      id: Date.now().toString(),
      ...validatedData,
      class_id: body.class_id,
      teacher_id: body.teacher_id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return NextResponse.json(newMaterial, { status: 201 })
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