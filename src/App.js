import React from "react";
import "./styles/App.css";
import Nav from "./components/main-nav";
import Search from "./components/search";
import AlbumSearch from "./components/album-search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vinyl Bin</h1>
        {/* <Nav /> */}
      </header>
      <div>
        <Search />
        {/* <AlbumSearch /> */}
      </div>
    </div>
  );
}

export default App;
