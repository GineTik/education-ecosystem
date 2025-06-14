-- This is an empty migration.

-- Remove the old instance-scope:module:manage permission and its role assignment
DELETE FROM "_PermissionToRole" WHERE "A" = 'instance-scope:module:manage' AND "B" = 'institution_admin';
DELETE FROM "Permission" WHERE slug = 'instance-scope:module:manage';

-- Add the new instance module permissions
INSERT INTO "Permission" (slug, name, description) VALUES 
  ('(instance):module:create', 'Instance Module Create', 'Allows creation of modules within a specific institution instance'),
  ('(instance):module:read', 'Instance Module Read', 'Allows reading of modules within a specific institution instance'),
  ('(instance):module:update', 'Instance Module Update', 'Allows updating of modules within a specific institution instance'),
  ('(instance):module:delete', 'Instance Module Delete', 'Allows deletion of modules within a specific institution instance');

-- Assign the new instance module permissions to institution_admin role
INSERT INTO "_PermissionToRole" ("A", "B") VALUES 
  ('(instance):module:create', 'institution_admin'),
  ('(instance):module:read', 'institution_admin'),
  ('(instance):module:update', 'institution_admin'),
  ('(instance):module:delete', 'institution_admin');

