export default function TodoLayout({children}) {
  console.log("ToDo layout");
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Todo layout</nav>

      {children}
    </section>
  );
}