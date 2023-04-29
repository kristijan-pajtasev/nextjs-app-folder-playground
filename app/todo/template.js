export default function ToDoTemplate({children}) {
  console.log("ToDo template");
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>ToDo template</nav>

      {children}
    </section>
  );
}