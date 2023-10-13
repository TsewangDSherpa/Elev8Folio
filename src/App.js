import "./App.css";
import Header from "./Components/Header";
import SumeNav from "./Components/SumeNav";
import Sume from "./Components/Sume";
import { useState } from "react";

function App() {
  const [Color, setColor] = useState("");
  const getColor = (color) => {
    setColor(color);
  };

  return (
    <>
      <Header getColor={getColor} />
      <div className="Body">
        <SumeNav bgColor={Color} />
        <Sume />
      </div>
    </>
  );
}

export default App;
