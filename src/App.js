import "./App.css";
import Header from "./Components/Header";
import Sume from "./Components/Sume";
import SumeNav from "./Components/SumeNav";

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
