import React, { useContext } from "react";
import { auth } from "./base";
import { AuthContext } from "./Auth";
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@material-ui/core';



const Nav = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar display="flex">
        <Box flexGrow={1}>
          <Typography variant="h4">
              Vinyl Bin
          </Typography>
        </Box>
        <Box mr={2}>
          <Typography variant="h6" >{ currentUser.email }</Typography>
        </Box>
        <Button color="secondary" variant="contained" onClick={() => auth.signOut()}>Sign out</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;