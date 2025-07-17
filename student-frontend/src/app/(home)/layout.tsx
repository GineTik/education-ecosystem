import RootHeader from "./header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RootHeader />
      <main>{children}</main>
    </>
  );
}
