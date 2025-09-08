function List(){
    const fruits=[
        {id: 1,name : "Apple",calories :95},
        {id: 2,name: "Orange",calories :45},
        {id:3,name: "Banana",calories :105},
        {id: 4,name: "Mango",calories :159},
        {id: 5,name: "Pineapple",calories :37}
    ]
    //fruits.sort((a,b)=>a.name.localeCompare(b.name))//alphabetic sorting
    //fruits.sort((a,b)=>a.calories-b.calories)//numeric sorting
    const lowCalFruit=fruits.filter(fruit=>fruit.calories<100)
    //const listItems=fruits.map(fruit=><li key={fruit.id}>{fruit.name}:&nbsp;{fruit.calories}</li>)
    const listItems=lowCalFruit.map(lowCalFruit=><li key={lowCalFruit.id}>
        {lowCalFruit.name}:&nbsp;
        {lowCalFruit.calories}</li>)//to display low cal fruits
    return (
        <div>
       <ol>{listItems}</ol>
       </div>
    )
}
//lets convert the array of strings to array of object by putting the items in array in curly braces and adding a key(name)

export default List