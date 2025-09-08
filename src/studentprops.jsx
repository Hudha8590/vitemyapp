function Student(props){
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent?"Yes":"No"}</p>
        </div>
    )
}
Student.defaultProps={
    name :"guest",
    age : 0,
    isStudent : false,

}
export default Student