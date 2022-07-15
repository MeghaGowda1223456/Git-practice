import logo from "./logo.svg";
import "./App.css";
import DataComponents from "./components/DataComponents";
import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Lolakshi from "./components/Lolakshi";
import Ramya from './components/Ramya';

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <ComponentB/>
      <Lolakshi/>
      {state ? <DataComponents setState={setState} /> : <ComponentA />}

      <Ramya/>
    </div>
  );
}



export default App;
