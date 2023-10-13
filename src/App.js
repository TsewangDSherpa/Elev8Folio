import "./App.css";
import Icon from "./Components/Icon";
import ProfileImage from "./Components/ProfileImage";

function App() {
  return (
    <div className="App">
      <Icon src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} />
      <Icon
        src={
          "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
        }
      />
      <ProfileImage
        src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
      />
    </div>
  );
}

export default App;
