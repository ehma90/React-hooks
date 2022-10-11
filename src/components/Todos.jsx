import { useState, useEffect, useRef } from "react";

function Todos() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
            if(isMounted.current){
              setTodos(data);
          setIsLoading(false);  
            }
        }, 3000);
      });

    // Runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return isLoading ? <h3>Loading...</h3> : <h3>{todos.title}</h3>;
}

export default Todos;
