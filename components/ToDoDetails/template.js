import {useEffect} from "react";

const ToDoDetailsTemplate = () => {
  console.log("ToDoDetails template");
  useEffect(() => {
    console.log("useEffect ToDoDetails template");
  }, []);
  return (
    <div>ToDoDetails template</div>
  );
}
export default ToDoDetailsTemplate