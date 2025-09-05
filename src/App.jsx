import Usestate from "./useStatetask"
import Usestatestring from "./usestatestring"
import Count from "./propstate"
import Togglemssg from "./tasktooglemssg";
function App() {


  return (
    <>
    <Usestate/>
    <Usestatestring/>
    <Count initialValue={5}/>
    <Togglemssg messages="Hello, HUDHA !"/>
    </>
  );
}

export default App
