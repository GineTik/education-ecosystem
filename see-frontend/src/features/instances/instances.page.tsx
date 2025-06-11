import { InstanceCreateForm } from "./instances-create-form";
import { InstancesList } from "./instances-list";

export function InstancesPage() {
  return (
    <div className="p-4 space-y-8 max-w-[600px] w-full mx-auto">
      <h1>Управління закладами освіти</h1>
      <InstanceCreateForm />
      <InstancesList />
    </div>
  );
}
