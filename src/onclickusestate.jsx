import React,{useState} from "react";
function Counted(){
    const [count,setCount]=useState(0);
    return (
        <>
         <h2>Count:{count}</h2>
         <button onClick={()=>setCount(count+1)}>Increment</button>
         <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}
export default Counted