import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import  { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Umashankar from "./components/Umashankar";
import Lolakshi from "./components/Lolakshi";
import Ramya from './components/Ramya';
import Devina from "./components/Devina";
<<<<<<< HEAD
import Fruits from "./components/Shubham";
=======
import Jagath from './components/Jagath';
import Fruits from "./components/Shubham";
import Fruits from './components/Shubham';
import Vijay from './components/vijay';
>>>>>>> b5b8fa52c3e265e0ca5516094821fbf626fad056

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App" style={{display:"flex"}}>
      <Umashankar/>
      <ComponentB/>
      <Devina/>
      <Lolakshi/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}
      <Devina/>
      <Jagath/>
      <Ramya/>
      <Fruits/>
<<<<<<< HEAD
=======
      <Vijay/>
>>>>>>> b5b8fa52c3e265e0ca5516094821fbf626fad056
    </div>
  );
}



export default App;
