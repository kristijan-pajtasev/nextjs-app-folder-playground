import {useEffect} from "react";

const ToDoDetails = () => {
  console.log("ToDoDetails component");
  useEffect(() => {
    console.log("useEffect ToDoDetails component");
  }, []);
  return (
    <div>ToDoDetails</div>
  );
}
export default ToDoDetails