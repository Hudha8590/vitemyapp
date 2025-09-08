function Logical({hasMessage}){
  return (
    <div>
        <h2>Dashboard</h2>
        {hasMessage && <p>you have a messager</p>}
    </div>
  )
}
export default Logical