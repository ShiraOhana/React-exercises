import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(true);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Press the Counter</button>
      <span> {count}</span>
    </div>
  );
}
export default Count;
