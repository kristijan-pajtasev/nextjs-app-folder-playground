"use client"
import {useEffect} from "react";

export default function TodoLayout({children}) {
  console.log("ToDo layout");
  useEffect(() => {
    console.log("useEffect ToDo layout");
  }, [])
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Todo layout</nav>

      {children}
    </section>
  );
}