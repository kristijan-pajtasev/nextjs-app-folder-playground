import {useEffect} from "react";

const ToDoTemplate = () => {
  console.log("todo template");
  useEffect(() => {
    console.log("useEffect todo template");
  }, []);
  return (
    <div>ToDo template</div>
  );
}
export default ToDoTemplate