import "./css/App.css";
import Home from "./components/Home";

function App() {
  return (
    // Main App
    <div className="App">
      {/* Heading/title */}
      <div className="heading">
        <h1>VCS Search</h1>
      </div>
      {/* Home componant called */}
      <Home />
    </div>
  );
}

export default App;
