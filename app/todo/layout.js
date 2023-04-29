export default function TodoLayout({children}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Todo layout</nav>

      {children}
    </section>
  );
}