"use client"

// .. rest of the code
import {useEffect, use} from 'react'

const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => { res({}) }, 1500)
  })
}

export default function ToDoDetail() {
  console.log("ToDo details page");
  const data = use(getData());
  console.log("data: ", data);
  useEffect(() => {
    if(Math.random() < 0.01)
      throw new Error("ToDoDetails Error")
  }, [])
  return (
    <div>
      <div>ToDoDetail world</div>
    </div>
  )
}