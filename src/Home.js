import React from "react";
import Search from "./components/Search"
import Nav from "./Nav"
import { Container } from '@material-ui/core';

const Home = () => {
  return (
    <>
    <Nav/>
    <Container>
      <Search/>
    </Container>
    </>
  );
};

export default Home;