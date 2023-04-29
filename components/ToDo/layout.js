import {useEffect} from "react";

const ToDoLayout = () => {
  console.log("todo layout");
  useEffect(() => {
    console.log("useEffect todo layout");
  }, []);
  return (
    <div>ToDo layout</div>
  );
}
export default ToDoLayout