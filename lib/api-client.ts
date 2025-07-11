const API_BASE = '/api'

class ApiClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }))
      throw new Error(error.error || `HTTP ${response.status}`)
    }

    return response.json()
  }

  // Auth
  async login(email: string, password: string) {
    return this.request('/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  // Classes
  async getClasses(teacherId: string) {
    return this.request(`/classes?teacher_id=${teacherId}`)
  }

  async createClass(data: any) {
    return this.request('/classes', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Students
  async getStudents(classId?: string) {
    const query = classId ? `?class_id=${classId}` : ''
    return this.request(`/students${query}`)
  }

  async createStudent(data: any) {
    return this.request('/students', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Materials
  async getMaterials(classId?: string, teacherId?: string) {
    const params = new URLSearchParams()
    if (classId) params.append('class_id', classId)
    if (teacherId) params.append('teacher_id', teacherId)
    const query = params.toString() ? `?${params.toString()}` : ''
    return this.request(`/materials${query}`)
  }

  async createMaterial(data: any) {
    return this.request('/materials', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}

export const apiClient = new ApiClient()