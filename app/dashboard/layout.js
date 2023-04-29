export default function DashboardLayout({children}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Dashboard layout</nav>

      {children}
    </section>
  );
}