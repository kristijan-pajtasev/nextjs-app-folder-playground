"use client"
import {useEffect} from "react";

export default function ToDoDetailTemplate({children}) {
  console.log("ToDo details template");
  useEffect(() => {
    console.log("useEffect ToDo details template");
  }, [])
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>ToDoDetail template</nav>

      {children}
    </section>
  );
}