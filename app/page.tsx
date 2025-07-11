import { LoginForm } from '@/components/auth/login-form'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">EduConnect</h1>
          <p className="text-gray-600">Educational Management Platform</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}