"use client"
export default function ToDoDetailLayout({children}) {
  console.log("ToDo details layout");
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>ToDoDetail layout</nav>

      {children}
    </section>
  );
}