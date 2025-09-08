function Button(){
    //const handleClick=()=> document.write ("Button was clicked")
    const handleClick=()=> console.log("Button was clicked")
    
   return (
    <button onClick={handleClick}>Click Me</button>
   )
}
export default Button