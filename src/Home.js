import React from "react";
// import app from "./base";
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

  // return (
  //   <Container>
  //     <Container>
  //       <Box>
  //         <h1>Home</h1>
  //         <Button variant="contained" color="primary" onClick={() => app.auth().signOut()}>Sign out</Button>
  //       </Box>
  //     </Container>
  //     <Search/>
  //   </Container>
  // );
};

export default Home;