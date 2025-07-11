'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { useAuthStore } from '@/stores/auth-store'
import { loginSchema, type LoginInput } from '@/lib/validations'
import { DEFAULT_CREDENTIALS, ROUTES } from '@/lib/constants'

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuthStore()
  const { toast } = useToast()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: DEFAULT_CREDENTIALS.email,
      password: DEFAULT_CREDENTIALS.password
    }
  })

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true)
    try {
      await signIn(data.email, data.password)
      toast({
        title: 'Success',
        description: 'Logged in successfully!'
      })
      router.push(ROUTES.DASHBOARD)
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Login failed',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fillDefaults = () => {
    setValue('email', DEFAULT_CREDENTIALS.email)
    setValue('password', DEFAULT_CREDENTIALS.password)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="teacher@school.edu"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={fillDefaults}
              className="w-full text-sm"
            >
              Use Demo Credentials
            </Button>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>Demo credentials:</p>
            <p className="font-mono text-xs">
              {DEFAULT_CREDENTIALS.email} / {DEFAULT_CREDENTIALS.password}
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}