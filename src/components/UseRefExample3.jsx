import { useState } from "react";
import Todos from "./Todos";

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      {showTodo && <Todos/>}
      <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Show Todos</button>
    </div>
  );
}

export default UseRefExample3;
