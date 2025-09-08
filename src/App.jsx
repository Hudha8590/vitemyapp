import Usestate from "./useStatetask"
import Usestatestring from "./usestatestring"
import Count from "./propstate"
import Togglemssg from "./tasktooglemssg";
import Temperature from "./tasktemp";
import Student from "./studentprops";
import UserGreeting from "./conditional rendering"
import Loggin from "./conrenternayopre"
import Logical from "./conrenlogicalAND";
import Switch from "./condrenswitch";
import List from "./list";
function App() {
  return (
    <>
    <Usestate/>
    <Usestatestring/>
    <Count initialValue={5}/>
    <Togglemssg messages="Hello, HUDHA !"/>
    <Temperature initialTemp={25}/>
    <Student name="Mehshan" age={21} isStudent={true}/>
    <Student name="Hudha" age={22} isStudent={true}/>
    <Student name="Rubeena" age={42} isStudent={false}/>
    <Student name="Hidha" age={21} isStudent={false}/>
    <UserGreeting isLoggedin={true} userName="Hudha"/>
    <UserGreeting isLoggedin={false}/>
    <Loggin isLoggedin={true} userName="Mehshan"/>
    <Loggin isLoggedin={false}/>
    <Loggin/>
    <Logical hasMessage={false}/>
    <Logical hasMessage={true}/>
    <Switch status="Loading..."/>
     <Switch stutus="success"/>
     <Switch status="error"/>
     <Switch status="unknown"/>
     <List/>
    </>
  );
}

export default App
