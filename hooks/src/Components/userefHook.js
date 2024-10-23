/**
import React, { useRef, useState } from "react";

function UHooks() {
  const [name, setName] = useState(""); // State for the name
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name is: ${name}`);
  };

  const resetInput = () => {
    inputRef.current.value = "";
    setName(""); // Clear the state as well
  };

  return (
    <div>
      <h2>UseRef Hook</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={resetInput}>Reset</button>
      <p>Name is: {name}</p>
    </div>
  );
}

export default UHooks;
*/



