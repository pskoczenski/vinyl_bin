import React from "react";
import Search from "./components/Search"
// import Nav from "./Nav"
import NavDrawer from "./NavDrawer"
import { Container } from '@material-ui/core';

const Home = () => {
  return (
    <>
    <NavDrawer/>
    <Container>
      <Search/>
    </Container>
    </>
  );
};

export default Home;