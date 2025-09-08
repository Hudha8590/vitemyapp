function UserGreeting(props){
    if(props.isLoggedin){
        return <h3>Welcome {props.userName}</h3>
    }else{
        return <h3>Please login to continue</h3>
    }
}

export default UserGreeting

