-- SQLite Schema for Offline Local Database
PRAGMA foreign_keys = ON;

-- Teachers table
CREATE TABLE teachers (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    avatar_url TEXT,
    preferences TEXT DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Classes table
CREATE TABLE classes (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    teacher_id TEXT NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    subject TEXT,
    grade_level TEXT,
    settings TEXT DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Students table
CREATE TABLE students (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    class_id TEXT NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    student_id TEXT UNIQUE,
    parent_email TEXT,
    parent_phone TEXT,
    metadata TEXT DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Materials table
CREATE TABLE materials (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    class_id TEXT NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT,
    type TEXT DEFAULT 'document',
    file_url TEXT,
    metadata TEXT DEFAULT '{}',
    is_published INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Progress updates table
CREATE TABLE progress_updates (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    student_id TEXT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    teacher_id TEXT NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    type TEXT DEFAULT 'general',
    data TEXT DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Sync status table for offline sync
CREATE TABLE sync_status (
    table_name TEXT PRIMARY KEY,
    last_sync DATETIME DEFAULT CURRENT_TIMESTAMP,
    pending_changes INTEGER DEFAULT 0
);

-- Indexes for performance
CREATE INDEX idx_classes_teacher_id ON classes(teacher_id);
CREATE INDEX idx_students_class_id ON students(class_id);
CREATE INDEX idx_materials_class_id ON materials(class_id);
CREATE INDEX idx_progress_updates_student_id ON progress_updates(student_id);
CREATE INDEX idx_progress_updates_teacher_id ON progress_updates(teacher_id);

-- Insert sample data
INSERT INTO teachers (id, email, name) VALUES 
    ('550e8400-e29b-41d4-a716-446655440000', 'teacher@school.edu', 'John Teacher');

INSERT INTO classes (teacher_id, name, description, subject) VALUES 
    ('550e8400-e29b-41d4-a716-446655440000', 'Mathematics 101', 'Basic Mathematics', 'Math'),
    ('550e8400-e29b-41d4-a716-446655440000', 'English Literature', 'Literature and Writing', 'English');

INSERT INTO sync_status (table_name) VALUES 
    ('teachers'), ('classes'), ('students'), ('materials'), ('progress_updates');