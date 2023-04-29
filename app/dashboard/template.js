export default function DashboardTemplate({children}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Dashboard template</nav>

      {children}
    </section>
  );
}