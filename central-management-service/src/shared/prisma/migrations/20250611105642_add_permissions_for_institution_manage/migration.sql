-- Add institution permissions and assign them to admin role

-- Insert permissions into Permission table
INSERT INTO "Permission" (slug, name, description) VALUES 
  ('institution:manage', 'Institution Management', 'Allows full management of institution instances including creation, modification, and deletion'),
  ('institution:users', 'Institution User Management', 'Allows managing users within an institution including adding, removing, and modifying user roles'),
  ('institution:read', 'Institution Read Access', 'Allows read-only access to institution data and configurations');

-- Assign all institution permissions to admin role
INSERT INTO "_PermissionToRole" ("A", "B") VALUES 
  ('institution:manage', 'admin'),
  ('institution:users', 'admin'),
  ('institution:read', 'admin');

