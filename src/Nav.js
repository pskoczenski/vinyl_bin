import React from "react";
import app from "./base";
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@material-ui/core';

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar display="flex">
        <Box flexGrow={1}>
          <Typography variant="h6">
              Vinyl Bin
          </Typography>
        </Box>
        <Button color="inherit" onClick={() => app.auth().signOut()}>Sign out</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;