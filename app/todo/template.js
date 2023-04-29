export default function ToDoTemplate({children}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>ToDo template</nav>

      {children}
    </section>
  );
}