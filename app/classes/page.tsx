import { CreateClassForm } from '@/features/classes/components/create-class-form'

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Classes</h1>
        <p className="text-gray-600">Manage your classes and course materials.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CreateClassForm />
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your Classes</h2>
          <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
            <p>No classes yet. Create your first class to get started!</p>
          </div>
        </div>
      </div>
    </div>
  )
}