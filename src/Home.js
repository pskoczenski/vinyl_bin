import React from "react";
import app from "./base";
import Search from "./components/Search"



const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>

      <Search/>
    </>
  );
};

export default Home;