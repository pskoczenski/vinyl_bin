import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "./base";
import { 
  Container,
  TextField,
  Button,
  Box
} from '@material-ui/core';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <>
    <Container maxWidth="sm">
      <Box component='h1'>Welcome to Vinyl Bin!</Box>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <Box mb={2}>
          <TextField label="Email" variant="outlined" name="email" type="email" placeholder="Email" />
        </Box>
        <Box mb={2}>
          <TextField label="Password" variant="outlined" name="password" type="password" placeholder="Password" />
        </Box>
        <Box mb={2}>
          <Button variant="contained" color="primary" type="submit" m={4}>Sign Up</Button>
        </Box>  
      </form>
      <h5>Alread a user? No problem, you can login 
        <Link to="login"> here</Link>
      </h5>
    </Container>
    </>
  );
};

export default withRouter(SignUp);