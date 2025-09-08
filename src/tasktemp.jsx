
import React,{useState} from "react";
function Temperature({initialTemp}){
    const [temp,setTemp]=useState(initialTemp);
    const message=temp < 20?"too cold" :temp<=30 ?"perfect":"Too Hot";
    return (
        <div>
           <h3>Temperature:{temp}C</h3>
           <p>{message}</p>
            <button onClick={()=>setTemp(temp+1)}>Increase</button>
            <button onClick={()=>setTemp(temp-1)}>Decrease</button>
        </div>
    )
}
export default Temperature