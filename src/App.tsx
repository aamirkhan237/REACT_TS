import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Persion from "./components/Persion";
import PersionList from "./components/PersionList";
import Loggedin from "./components/state/Loggedin";
import User from "./components/state/User";
import Status from "./components/Status";
import { Private } from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Tost from "./components/Tost/Tost";
import UseEffect from "./Hooks/UseEffect";
import UseMemo from "./Hooks/UseMemo";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";

function App() {
  const nameObj = {
    first: "Aamirkhan",
    last: "Pathan",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Helo",
      last: "How are u",
    },
  ];
  return (
    <div className="App">
      <Greet name="Aamir" messageCount={20} isLogin={false} />
      <Persion nameObj={nameObj} />
    
      {/* <Oscar>
      <Heading>Place holder</Heading>
      </Oscar> */}
      <PersionList names={nameList} />
      <Status status="success" />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Loggedin />
      <User />
      <Private isLogin ={true} component = {Profile} />
      <Tost position="left.center" />
      <UseEffect />
      <UseMemo />
    </div>
  );
}

export default App;
