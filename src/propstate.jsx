import React,{useState} from "react";
function Count({initialValue}){
   const [count,setCount]=useState(initialValue)
   return (
    <div>
    <h3>count:{count}</h3>
    <button onClick={()=>setCount(count + 1)}>INCREMENT</button>
    <button onClick={()=>setCount(count - 1)}>Decrement</button>
    <button onClick={()=>setCount(initialValue)}>RESET</button>
    </div>
   )
}
export default Count