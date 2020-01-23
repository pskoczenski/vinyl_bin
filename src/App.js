import React from "react";
import "./styles/App.css";
import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vinyl Bin</h1>
      </header>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default App;
