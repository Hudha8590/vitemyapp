import React,{useState} from "react";
function greeting(){
    const [name,setName]=useState("Hudha");
    const pro=()=>{setName("React Developer")}
    return (
        <div>
            <h4>Hello,{name}</h4>
            <button onClick={pro}>Change Name</button>
        </div>
    )
}
export default greeting