import "./App.css";
import Demo from "./components/Demo";

function App() {
  const x = 10;
  var text;

  if (x === 1) {
    text = "equal";
  } else {
    text = "not equal";
  }
  return (
    <div>
      <h1 className="welcome">hello my dear friends</h1>
      <p style={{ backgroundColor: "black", color: "white" }}>{50 + 5}</p>
      <h1>{text}</h1>
      <h1>{x >= 10 ? "x is greater than or equal to 10" : "no match"}</h1>
      <Demo para = {x}/>
    </div>
  );
}

export default App;
