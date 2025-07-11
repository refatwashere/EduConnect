export const mockClasses = [
  {
    id: '1',
    name: 'Mathematics 101',
    description: 'Basic mathematics course covering algebra and geometry',
    subject: 'Mathematics',
    grade_level: '9th Grade',
    teacher_id: 'demo-teacher-id',
    student_count: 25,
    created_at: new Date('2024-01-15').toISOString(),
    updated_at: new Date('2024-12-01').toISOString()
  },
  {
    id: '2',
    name: 'Algebra Fundamentals',
    description: 'Introduction to algebraic concepts and problem solving',
    subject: 'Mathematics',
    grade_level: '10th Grade',
    teacher_id: 'demo-teacher-id',
    student_count: 22,
    created_at: new Date('2024-01-20').toISOString(),
    updated_at: new Date('2024-11-28').toISOString()
  }
]

export const mockStudents = [
  {
    id: '1',
    name: 'John Smith',
    student_id: 'STU001',
    class_id: '1',
    parent_email: 'parent1@example.com',
    parent_phone: '+1234567890',
    created_at: new Date('2024-01-16').toISOString(),
    updated_at: new Date('2024-12-01').toISOString()
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    student_id: 'STU002',
    class_id: '1',
    parent_email: 'parent2@example.com',
    parent_phone: '+1234567891',
    created_at: new Date('2024-01-16').toISOString(),
    updated_at: new Date('2024-12-01').toISOString()
  }
]

export const mockMaterials = [
  {
    id: '1',
    title: 'Chapter 1: Introduction to Algebra',
    content: 'Basic algebraic concepts and operations',
    type: 'document' as const,
    class_id: '1',
    teacher_id: 'demo-teacher-id',
    file_url: '',
    created_at: new Date('2024-01-17').toISOString(),
    updated_at: new Date('2024-11-30').toISOString()
  },
  {
    id: '2',
    title: 'Practice Problems Set 1',
    content: 'Homework assignments for week 1',
    type: 'document' as const,
    class_id: '1',
    teacher_id: 'demo-teacher-id',
    file_url: '',
    created_at: new Date('2024-01-18').toISOString(),
    updated_at: new Date('2024-11-29').toISOString()
  }
]