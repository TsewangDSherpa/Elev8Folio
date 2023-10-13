import "./App.css";
import Header from "./Components/Header";
import SumeNav from "./Components/SumeNav";
import Sume from "./Components/Sume";

function App() {
  return (
    <>
      <Header />
      <div className="Body">
        <SumeNav />
        <Sume />
      </div>
    </>
  );
}

export default App;
