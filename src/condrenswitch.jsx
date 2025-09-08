function Switch({status}){
    switch(status){
        case "Loading...":
        return <p>Loading...</p>
        case "success":
            return <p>Data loaded successfully</p>
        case "error":
            return <p>something went wrong</p>
        default :
           return <p>Idle</p>
    }
}
export default Switch