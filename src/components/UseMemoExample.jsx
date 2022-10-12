import { useState, useRef, useEffect, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

//   const sqrt = getsqrt(number)
  const sqrt = useMemo(() => getsqrt(number), [number])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={() => setNumber(renders.current)}
        className="form-control w-25"
      />
      <h2 className="my-3">
        The square of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn btn-primary my-3">
        Re Render
      </button>
      <h2>Render: {renders.current}</h2>
    </div>
  );
}

function getsqrt(n){
    for (let i = 0; i < 10000; i++){
        console.log(i)
    }

    console.log('Expensive function')
    return Math.sqrt(n)
}

export default UseMemoExample;
