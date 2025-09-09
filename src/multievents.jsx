function MultipleEvent(){
return(
    <div>
        <button onMouseEnter={()=>console.log("Mouse entered")}
                  onMouseLeave={()=>console.log("Mouse Left")}
                  onClick={()=>console.log("Clicked")}>

            BUTTON</button>

    </div>
)
}
export default MultipleEvent