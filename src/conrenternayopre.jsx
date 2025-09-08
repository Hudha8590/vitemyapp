function Loggin(props){
  return(props.isLoggedin?
  <h2>"Welcome"{props.userName}</h2> :
  <h2>"Please login to continue"</h2>)
}
Loggin.defaultProps={
    isLoggedin: false,
    userName:"guest"
}
export default Loggin