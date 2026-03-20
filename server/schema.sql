-- Create the database (if not already created)
-- CREATE DATABASE student_companion;

-- Syllabus Table
CREATE TABLE IF NOT EXISTS syllabus (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    chapters JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Learning Paths Table
CREATE TABLE IF NOT EXISTS learning_paths (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    chapter TEXT NOT NULL,
    pdf_url TEXT,
    content TEXT,
    is_generated BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Practice Tests Table
CREATE TABLE IF NOT EXISTS practice_tests (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL,
    chapter TEXT NOT NULL,
    test_id TEXT NOT NULL,
    questions JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    uid TEXT PRIMARY KEY,
    email TEXT,
    display_name TEXT,
    photo_url TEXT,
    password_hash TEXT,
    role TEXT DEFAULT 'student',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
