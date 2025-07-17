-- This is an empty migration.


INSERT INTO "Permission" (slug, name, description) VALUES 
  ('instance-scope:module:manage', 'Instance Scoped Module Management', 'Allows full management of instance modules including creation, modification, and deletion');

-- Assign all institution permissions to admin role
INSERT INTO "_PermissionToRole" ("A", "B") VALUES 
  ('instance-scope:module:manage', 'institution_admin');