import React,{useState,useEffect} from "react";
function MyEffect({initialValue}){
    const [count,setCount]=useState(initialValue);
    const [color,setColor]=useState("green");
    //Run after every renders:
    // useEffect(()=>{
    //     document.title=`count : ${count}`
    // })
    //Runs only on mount:
    // useEffect(()=>{
    //    document.title =`count : ${count}  ${color}`
    // },[])//the count in title will only update once.
    //runs on mount + value changes:
    // useEffect(()=>
    //    {document.title=`count :  ${count}  ${color}`},[count]//[count]=[value] in this,if we add and also 
    // //sub the title updates but when we change the color the item in <p></p> change the color but not the title.
    // )
    //Multiple values in useEffect:
    useEffect(()=>{
       document.title =` Count : ${count} ${color}`
    },[color,count])

    function addCount(){
        setCount((c)=>c+1)
    }
    function subCount(){
        setCount(c=>c-1)
    }
    function changeColor(){
        setColor(c=>c==="green"?"red":"green")
    }
    return (<>
        <p style={{color:color}}>Count:{count}</p> 
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Substract</button>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={()=>setCount(initialValue)}>Reset</button>
        </>
    )
}
export default MyEffect