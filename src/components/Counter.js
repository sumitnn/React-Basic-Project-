import React,{useState,useEffect} from 'react'

export default function Counter() {
    const [value, setValue] = useState(0);
    const fun = () => {
        
       
        setValue(value + 1);
    }
    useEffect(() => {
        
        value > 0 ? document.title = `chat(${value})` : document.title = `chat`;
    });
  return (
      <div className="text-center mt-5">
          <h1>{value}</h1>
          <button type="button" className="btn btn-primary" onClick={()=>fun()}>Chat </button>
    </div>
  )
}
