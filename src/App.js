import "./App.css";
import Header from "./Components/Header";
import SumeNav from "./Components/SumeNav";
import Sume from "./Components/Sume";
import { useState } from "react";
import Homepage from "./Components/Homepage";

function App() {
  const [Color, setColor] = useState("");
  const [HP, setHP] = useState(true);
  const getColor = (color) => {
    setColor(color);
  };

  const handleHP = () => {
    setHP(!HP);
  };
  // console.log("The RBG" )
  // return (
  //   <>
  //     <Header getColor={getColor} />
  //     <div className="Body">
  //       <SumeNav bgColor={Color} />
  //       <Sume />
  //     </div>
  //   </>
  // );

  return (
    <>
      <button onClick={handleHP}>Go to PPage</button>

      {HP ? (
        <Homepage></Homepage>
      ) : (
        <>
          <Header getColor={getColor} />
          <div className="Body">
            <SumeNav bgColor={Color} />
            <Sume />{" "}
          </div>
        </>
      )}
    </>
  );
}

export default App;
