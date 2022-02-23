
import React, { useState } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";

function Data() {
    const [value, setValue] = useState(0);
  return (
      <>
          <div className="container mt-5 text-center">
              <h2>{value}</h2>
              <br />
              <br />
              <button className="btn btn-primary" onClick={() => setValue(value + 1)}><FiPlus /> Increment</button>&nbsp;&nbsp;&nbsp;
              <button className="btn btn-danger" onClick={() => value > 0 ? setValue(value - 1) : setValue(0)}><FiMinus /> Decrement</button>

          </div>
      </>
  )
}

export default Data