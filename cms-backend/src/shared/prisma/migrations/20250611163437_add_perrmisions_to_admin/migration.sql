-- This is an empty migration.

INSERT INTO "Permission" (slug, name, description) VALUES 
  ('users:manage', 'Users Management', 'Allows full management of users including creation, modification, and deletion'),
  ('users:read', 'Users Read Access', 'Allows read-only access to users data and configurations');

-- Assign all institution permissions to admin role
INSERT INTO "_PermissionToRole" ("A", "B") VALUES 
  ('users:manage', 'admin'),
  ('users:read', 'admin');

