import React, { useEffect, useRef } from 'react';

function UseRefExx() {
  const inputRef = useRef(null);
  const renderCountRef = useRef(1);

  useEffect(() => {
    renderCountRef.current++;
  });

  function showInputValue() {
    alert(`Input value is: ${inputRef.current.value}`);
  }

  return (
    <div>
      <p>Component re-rendered: {renderCountRef.current} times</p>
      <label htmlFor="name">Enter Name: </label>
      <input
        type="text"
        id="name"
        ref={inputRef}  // Controlled directly via DOM
      />
      <br />
      <button onClick={showInputValue}>Show Input Value</button>
    </div>
  );
}

export default UseRefExx;
