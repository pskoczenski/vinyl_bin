import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "./base.js";
import { AuthContext } from "./Auth.js";
import { 
  Container,
  TextField,
  Button,
  Box } from '@material-ui/core';
// import SignUp from "./SignUp";


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await auth
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <Container maxWidth="sm">
      <Box component='h1'>Welcome to Vinyl Bin!</Box>
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <Box mb={2}>
          <TextField label="Email" variant="outlined" name="email" type="email" placeholder="Email" />
        </Box>
        <Box mb={2}>
          <TextField label="Password" variant="outlined" name="password" type="password" placeholder="Password" />
        </Box>
        <Box mb={2}>
          <Button variant="contained" color="primary" type="submit">Log In</Button>
        </Box> 
      </form>
      <h5>Not a user yet? No problem, you can sign up
        <Link to="signup"> here</Link>
      </h5>
    </Container>
    </>
  );
};

export default withRouter(Login);