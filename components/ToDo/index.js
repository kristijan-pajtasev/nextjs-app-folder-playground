import {useEffect} from "react";

const ToDo = () => {
  console.log("todo component");
  useEffect(() => {
    console.log("useEffect todo component");
  }, []);
  return (
    <div>ToDo</div>
  );
}
export default ToDo