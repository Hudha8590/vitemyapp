import React,{useState} from "react";
function Selection(){
    const [color,setColor]=useState("");
    function handleColorChange(event){
        setColor(event.target.value)}
        return (<div>
            <input value={color} onChange={handleColorChange} placeholder="Type your favourite color"/>
            <p>Your favourite color is:{` ${color}`}</p>
            </div>
        )
    }

export default Selection