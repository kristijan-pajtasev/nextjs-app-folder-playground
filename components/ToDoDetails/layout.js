import {useEffect} from "react";

const ToDoDetailsLayout = () => {
  console.log("ToDoDetails layout");
  useEffect(() => {
    console.log("useEffect ToDoDetails layout");
  }, []);
  return (
    <div>ToDoDetails layout</div>
  );
}
export default ToDoDetailsLayout