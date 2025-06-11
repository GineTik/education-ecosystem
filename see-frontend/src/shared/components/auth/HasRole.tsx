import { useProfile } from "@/shared/hooks/use-profile";

type HasRoleProps = {
  children: React.ReactNode;
  role: string;
};

export function HasRole({ children, role }: HasRoleProps) {
  const profile = useProfile();

  if (profile.data?.role !== role) {
    return null;
  }

  return children;
}
