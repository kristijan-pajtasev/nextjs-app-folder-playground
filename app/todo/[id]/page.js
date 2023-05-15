"use client"
import {useEffect} from 'react'
export default function ToDoDetail() {
  console.log("ToDo details page");

  useEffect(() => {
    if(Math.random() < 0.30)
      throw new Error("ToDoDetails Error")
  }, [])
  return (
    <div>
      <div>ToDoDetail world</div>
    </div>
  )
}