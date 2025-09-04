// import React,{useState} from "react";
// function ButtonLike(){
//     const [like,setLike]=useState(0)
//     return (
//         <div>
//         <h1>like:{like}</h1>
//         <button onClick={()=>setLike(like+1)}>Like</button>
//         </div>
//     )
// }
// export default ButtonLike

//Another Way:
import React,{useState} from "react";
function countLike(){
    const [like,setLike]=useState(0)
    const liked=()=>{setLike(like+1)}
    return (
        <div>
            <p>like:{like}</p>
            <button onClick={liked}>LIKE</button>
        </div>
    )
}
export default countLike