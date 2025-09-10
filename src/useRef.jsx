import React,{useRef,useEffect,useState} from "react";
function MyReference(){
    // let [number,setNumber]=useState(0);//when we use useState the component render again when ever we click on the button "click me"
    // function Num(){
    //     setNumber(n=>n + 1)
    // }
    
    //USING useRef:
    const ref=useRef(0);
    function Num(){
        ref.current++;
        console.log(ref.current)
    }
     //initial value is null:
    const inpRef=useRef(null);
    useEffect(()=>{
        console.log("comment rendering");
           
    })
    function handleClick(){
        console.log(inpRef.current.focus())}//.focus() is a build in method
    
    return (<>
       <button onClick={Num}>Click me!</button> 
       <button onClick={handleClick}>onClick</button>
       <input ref={inpRef} />
    </>
    
    )
}
export default MyReference