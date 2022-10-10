import { useRef } from "react";

function UseRefExamples1() {
  const inputRef = useRef();
  const paraRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = 'Hello'
    inputRef.current.style.border = '1px solid red'
    paraRef.current.innerText = 'Goodbye'
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name ">Name</label>
        <input type="text" id="name" ref={inputRef} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p ref={paraRef}>Hello</p>
      </form>
    </div>
  );
}

export default UseRefExamples1;
