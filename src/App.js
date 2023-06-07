import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Subject name="Saiful's" topic="arabic" like="English"></Subject>
      <Subject name="rakib's" topic="Bangla" like="Arabic"></Subject>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Subject(props) {
  return (
    <div>
      <h2>
        {props.name} favourite Subject is {props.topic}
      </h2>
      <h3>
        {" "}
        {props.name} also loves {props.like}
      </h3>
    </div>
  );
}

export default App;
