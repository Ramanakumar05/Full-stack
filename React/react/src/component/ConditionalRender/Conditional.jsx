import React from "react";

function Conditional() {
  // Uncomment this to test the "available" case:
  const carinfo = {
    name: "ramana"
  };

  return (
    <>
      {typeof carinfo !== "undefined" ? (
        <h1>Car info is available</h1>
      ) : (
        <h1>Car info is not available</h1>
      )}
    </>
  );
}

export default Conditional;
