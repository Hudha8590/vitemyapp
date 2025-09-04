import React,{useState} from "react";
function ButtonLike(){
    const [like,setLike]=useState(0)
    return (
        <div>
        <h1>like:{like}</h1>
        <button onClick={()=>setLike(like+1)}>Like</button>
        </div>
    )
}
export default ButtonLike