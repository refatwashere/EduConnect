# 🚀 EduConnect Setup Guide

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm
- Git for version control
- Code editor (VS Code recommended)

## 🛠️ Installation Steps

### 1. Install Dependencies
```bash
cd d:\dev\CascadeProjects\nunu
npm install
# or
pnpm install
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your configuration
```

## 🗄️ Database Setup Options

### Option A: Supabase (Cloud - Recommended for Production)

**Benefits:**
- ✅ Real-time subscriptions
- ✅ Built-in authentication
- ✅ Automatic backups
- ✅ Global CDN
- ✅ Free tier available

**Setup Steps:**

1. **Create Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Wait for project initialization

2. **Get Credentials**
   - Go to Settings → API
   - Copy Project URL and anon public key

3. **Configure Environment**
   ```bash
   # Add to .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

4. **Run Database Schema**
   - Go to Supabase SQL Editor
   - Copy and run `database/supabase-schema.sql`

5. **Enable Authentication**
   - Go to Authentication → Settings
   - Configure email authentication
   - Add your domain to allowed origins

### Option B: SQLite (Local Offline Database)

**Benefits:**
- ✅ No internet required
- ✅ Fast local queries
- ✅ Perfect for development
- ✅ Zero setup cost
- ✅ Desktop app offline mode

**Setup Steps:**

1. **Install SQLite Dependencies**
   ```bash
   npm install better-sqlite3
   npm install -D @types/better-sqlite3
   ```

2. **Configure Environment**
   ```bash
   # Add to .env.local
   USE_OFFLINE_DB=true
   NODE_ENV=development
   ```

3. **Initialize Database**
   ```bash
   # Database will be created automatically on first run
   npm run dev
   ```

4. **Database Location**
   - Database file: `data/educonnect.db`
   - Schema: `database/sqlite-schema.sql`

## 🚀 Development Server

### Start Web Application
```bash
npm run dev
# Visit http://localhost:3000
```

### Start Desktop Application
```bash
# Install Tauri CLI (one-time)
npm install -g @tauri-apps/cli

# Start desktop app
npm run tauri:dev
```

## 🔐 Authentication Setup

### Default Login Credentials
```
Email: teacher@school.edu
Password: (Set during first login)
```

### Supabase Authentication
1. Go to Authentication → Users
2. Create new user or use email signup
3. Verify email if required

### SQLite Authentication
- Uses simple email/password storage
- No email verification required
- Perfect for development

## 📱 Testing the Application

### Web Features to Test
- [ ] Login/logout functionality
- [ ] Dashboard overview
- [ ] Class management
- [ ] Student enrollment
- [ ] Material upload
- [ ] Progress tracking

### Desktop Features to Test
- [ ] Offline functionality
- [ ] File system access
- [ ] Native notifications
- [ ] Auto-updates

## 🔧 Development Tools

### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Desktop App
npm run tauri:dev    # Start desktop app
npm run tauri:build  # Build desktop app

# Database (Supabase)
npm run db:generate  # Generate types
npm run db:push      # Push schema changes
npm run db:seed      # Seed sample data
```

### Code Quality
```bash
# Format code
npm run format

# Lint and fix
npm run lint:fix

# Type checking
npm run type-check
```

## 🐛 Troubleshooting

### Common Issues

**1. Database Connection Failed**
- Check environment variables
- Verify Supabase project is active
- Ensure correct credentials

**2. SQLite Permission Error**
- Check file permissions in `data/` directory
- Ensure write access to project folder

**3. Tauri Build Failed**
- Install Rust: `rustup-init.exe`
- Restart terminal after Rust installation
- Run `npm run tauri:dev` again

**4. Port Already in Use**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Getting Help

- 📖 Check documentation in `/docs`
- 🐛 Report issues on GitHub
- 💬 Join Discord community
- 📧 Email support team

## 🚀 Next Development Steps

1. **Complete Core Features**
   - [ ] Class management CRUD
   - [ ] Student management CRUD
   - [ ] Material upload/management
   - [ ] Progress tracking system

2. **Add Advanced Features**
   - [ ] Real-time notifications
   - [ ] Parent communication portal
   - [ ] Analytics dashboard
   - [ ] Bulk operations

3. **Desktop App Enhancement**
   - [ ] Offline sync mechanism
   - [ ] File system integration
   - [ ] Native system notifications
   - [ ] Auto-updater setup

4. **Testing & Quality**
   - [ ] Unit tests setup
   - [ ] Integration tests
   - [ ] E2E testing with Playwright
   - [ ] Performance optimization

5. **Deployment Preparation**
   - [ ] Production environment setup
   - [ ] CI/CD pipeline
   - [ ] Error monitoring
   - [ ] Analytics integration

## 📊 Project Structure

```
educonnect/
├── app/                    # Next.js 14 app router
├── components/             # React components
├── lib/                    # Utilities and configs
├── stores/                 # Zustand state management
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript definitions
├── database/               # SQL schemas
├── public/                 # Static assets
└── docs/                   # Documentation
```

Ready to build the future of education! 🎓✨