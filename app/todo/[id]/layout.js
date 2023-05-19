"use client"
import {useEffect} from "react";

export default function ToDoDetailLayout({children}) {
  console.log("ToDo details layout");
  useEffect(() => {
    console.log("useEffect ToDo details layout");
  }, [])
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>ToDoDetail layout</nav>

      {children}
    </section>
  );
}