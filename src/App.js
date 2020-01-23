import React from "react";
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
import Search from "./components/search";

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='center'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Heading level='3' margin='none'>Vinyl Bin</Heading>
        <Button icon={<Notification />} onClick={() => {}} />
      </AppBar>
      <div>
        <Search />
      </div>
      
    </Grommet>
  );
}

export default App;
