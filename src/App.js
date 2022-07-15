import logo from "./logo.svg";

import "./App.css";
import DataComponents from "./components/DataComponents";
<<<<<<< HEAD
import { useState } from "react";
=======
import  { useState } from "react";
>>>>>>> 5fe3aee5635fe39f6f78c216d7dfb912a7c84d1f
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Umashankar from "./components/Umashankar";
import Lolakshi from "./components/Lolakshi";
import Ramya from './components/Ramya';
import Devina from "./components/Devina";
import Jagath from './components/Jagath';

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
      <Vijay/>
    </div>
  );
}



export default App;
