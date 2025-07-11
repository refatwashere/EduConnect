# 🤝 Contributing to EduConnect

Thank you for your interest in contributing to EduConnect! This guide will help you get started with contributing to our educational management platform.

## 🎯 Ways to Contribute

### 🐛 Bug Reports
- Report issues you encounter
- Provide detailed reproduction steps
- Include screenshots when helpful

### 💡 Feature Requests
- Suggest new features
- Describe use cases
- Discuss implementation ideas

### 💻 Code Contributions
- Fix bugs and issues
- Implement new features
- Improve performance
- Enhance documentation

### 📚 Documentation
- Improve existing docs
- Add missing documentation
- Create tutorials and guides
- Fix typos and errors

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git knowledge
- GitHub account
- Code editor (VS Code recommended)

### Development Setup
```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/EduConnect.git
cd educonnect

# 3. Add upstream remote
git remote add upstream https://github.com/refatwashere/EduConnect.git

# 4. Install dependencies
npm install

# 5. Set up environment
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 6. Start development server
npm run dev
```

### First Contribution
1. **Find an Issue**: Look for "good first issue" labels
2. **Comment**: Let others know you're working on it
3. **Create Branch**: Use descriptive branch names
4. **Make Changes**: Follow our coding standards
5. **Test**: Ensure everything works
6. **Submit PR**: Create a pull request

## 🔄 Development Workflow

### Branch Naming
```bash
# Feature branches
feature/class-management
feature/student-enrollment

# Bug fix branches
fix/login-redirect-issue
fix/mobile-navigation

# Documentation branches
docs/api-reference
docs/user-guide-update
```

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Features
feat: add class creation functionality
feat(auth): implement password reset

# Bug fixes
fix: resolve login redirect loop
fix(mobile): fix navigation menu overlap

# Documentation
docs: update API documentation
docs(readme): add deployment instructions

# Refactoring
refactor: simplify authentication logic
refactor(components): extract reusable UI components
```

### Pull Request Process

#### Before Creating PR
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation updated if needed
- [ ] Self-review completed
- [ ] Related issues referenced

#### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Closes #123
```

#### Review Process
1. **Automated Checks**: CI/CD pipeline runs
2. **Code Review**: Team members review
3. **Testing**: Manual testing if needed
4. **Approval**: At least one approval required
5. **Merge**: Squash and merge to main

## 📋 Coding Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use meaningful variable and function names

```typescript
// Good
interface CreateClassRequest {
  name: string
  description?: string
  teacherId: string
}

// Avoid
const data: any = { ... }
```

### React Components
- Use functional components with hooks
- Follow component naming conventions
- Implement proper prop types
- Use meaningful component structure

```typescript
// Good
interface ClassCardProps {
  class: Class
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function ClassCard({ class, onEdit, onDelete }: ClassCardProps) {
  return (
    <div className="class-card">
      {/* Component content */}
    </div>
  )
}
```

### CSS/Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use semantic class names

```tsx
// Good
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
  <h2 className="text-xl font-semibold text-gray-900">Class Name</h2>
  <p className="text-gray-600">Description</p>
</div>
```

### API Routes
- Follow RESTful conventions
- Implement proper error handling
- Use appropriate HTTP status codes
- Validate input data

```typescript
// Good
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }
    
    // Process request
    const result = await createClass(body)
    
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

## 🧪 Testing Guidelines

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Writing Tests
- Write tests for new features
- Update tests when modifying existing code
- Use descriptive test names
- Test both success and error cases

```typescript
// Example test
describe('ClassCard Component', () => {
  test('should display class name and description', () => {
    const mockClass = {
      id: '1',
      name: 'Math 101',
      description: 'Basic Mathematics'
    }
    
    render(<ClassCard class={mockClass} onEdit={jest.fn()} onDelete={jest.fn()} />)
    
    expect(screen.getByText('Math 101')).toBeInTheDocument()
    expect(screen.getByText('Basic Mathematics')).toBeInTheDocument()
  })
})
```

## 📚 Documentation Standards

### Code Documentation
- Add JSDoc comments for functions
- Document complex logic
- Include usage examples
- Keep comments up to date

```typescript
/**
 * Creates a new class with the provided information
 * @param classData - The class information
 * @returns Promise resolving to the created class
 * @throws Error if class creation fails
 */
async function createClass(classData: CreateClassRequest): Promise<Class> {
  // Implementation
}
```

### README Updates
- Keep installation instructions current
- Update feature lists
- Maintain accurate links
- Include relevant badges

### Wiki Documentation
- Use clear, concise language
- Include code examples
- Add screenshots for UI features
- Organize content logically

## 🏷️ Issue Labels

### Priority Labels
- `priority: high` - Critical issues
- `priority: medium` - Important features
- `priority: low` - Nice to have

### Type Labels
- `bug` - Something isn't working
- `feature` - New feature request
- `documentation` - Documentation improvements
- `enhancement` - Improve existing feature

### Status Labels
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `in progress` - Currently being worked on
- `needs review` - Ready for review

## 🎯 Project Priorities

### Current Focus Areas
1. **Core Features**: Class and student management
2. **User Experience**: Mobile responsiveness and performance
3. **Documentation**: Comprehensive guides and API docs
4. **Testing**: Automated testing coverage
5. **Accessibility**: WCAG compliance

### Upcoming Features
- Real-time communication system
- Advanced analytics dashboard
- Mobile native applications
- AI-powered insights
- Multi-school support

## 🤔 Questions & Support

### Getting Help
- **Development Questions**: GitHub Discussions
- **Bug Reports**: GitHub Issues
- **Feature Discussions**: GitHub Discussions
- **General Chat**: Discord (if available)

### Response Times
- **Bug Reports**: 24-48 hours
- **Feature Requests**: 1-2 weeks
- **Pull Reviews**: 2-3 days
- **Questions**: 24 hours

## 🎉 Recognition

### Contributors
All contributors are recognized in:
- README.md contributors section
- Release notes
- Project documentation
- Annual contributor highlights

### Contribution Types
We recognize all types of contributions:
- Code contributions
- Documentation improvements
- Bug reports and testing
- Community support
- Design and UX feedback

## 📜 Code of Conduct

### Our Standards
- **Be Respectful**: Treat everyone with respect
- **Be Inclusive**: Welcome diverse perspectives
- **Be Constructive**: Provide helpful feedback
- **Be Patient**: Remember we're all learning

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Personal attacks
- Spam or off-topic content

### Reporting
Report unacceptable behavior to:
- GitHub issue (for public matters)
- Email: conduct@educonnect.dev (for private matters)

## 🚀 Ready to Contribute?

1. **Start Small**: Look for "good first issue" labels
2. **Ask Questions**: Don't hesitate to ask for help
3. **Be Patient**: Code review takes time
4. **Have Fun**: Enjoy building something meaningful!

**Thank you for helping make education better for everyone! 🎓✨**