import "./App.css";
import Header from "./Components/Header";
import SumeNav from "./Components/SumeNav";
import Sume from "./Components/Sume";
import { useState } from "react";
import Homepage from "./Components/Homepage";

function App() {
  // const [Color, setColor] = useState("");

  // const getColor = (color) => {

  //   setColor(color);

  // };
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
      <Homepage></Homepage>
    </>
  );
}

export default App;
