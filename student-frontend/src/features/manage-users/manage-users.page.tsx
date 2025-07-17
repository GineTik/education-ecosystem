import { UsersCreateForm } from "./users-create-form";
import { UsersList } from "./users-list";

export function ManageUsersPage() {
  return (
    <div className="p-4 space-y-8 max-w-[800px] w-full mx-auto">
      <h1>Управління користувачами</h1>
      <UsersCreateForm />
      <UsersList />
    </div>
  );
}
