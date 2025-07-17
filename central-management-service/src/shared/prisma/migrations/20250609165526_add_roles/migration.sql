-- This is an empty migration.

-- Create initial roles based on roles.constants.ts

INSERT INTO "Role" (id, slug, name, description) VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 'student', 'Student', 'Regular student user with basic access permissions'),
  ('550e8400-e29b-41d4-a716-446655440002', 'admin', 'Administrator', 'System administrator with full access to all features'),
  ('550e8400-e29b-41d4-a716-446655440003', 'institution_admin', 'Institution Administrator', 'Administrator for a specific institution with management permissions');

