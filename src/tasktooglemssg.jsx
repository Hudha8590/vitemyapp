import React,{useState} from "react";
function Togglemssg({messages}){
   const [mssg,setMssg]=useState(false)
   return(
    <div>
    <button onClick={()=>setMssg(!mssg)}>{mssg?"hide":"show"}</button>
    {mssg&& <p>{messages}</p>}
    </div>
   )
}
export default Togglemssg