import React,{useState} from "react";
// function Previous({InitialValue}){
//     const [count,setCount]=useState(InitialValue);
//     function counting(){
//         setCount(count + 1)
//     }
//     function substract(){
//         setCount(count -1)
//     }
//     return (
//         <>
//         <h1>Count :{count}</h1>
//         <button onClick={counting}>Increment</button>
//         <button onClick={substract}>Decrement</button>
//         </>
//     )
// }
// export default Previous//This would work,but it is not safe to do this in this way.it may cause bugs if multiple updates happen quickly (because count might be outdated inside the closure).

//Safe Way:
//PREVIOUS STATE in useState:
function Previous(){
    const [count,setCount]=useState(0);
    const handleAdd=()=>setCount(prevCount=>prevCount+1)
    const handleSub=()=>setCount(prevCount=>prevCount-1)
    return (
        <>
        <h2>count : {count}</h2>
        <button onClick={handleAdd} >Increment</button>
        <button onClick={handleSub}>Decrement</button>
        </>

    )
}
export default Previous