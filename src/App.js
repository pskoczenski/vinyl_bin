import React from "react";
import { Box, Grommet } from 'grommet';
import Nav from "./components/main-nav";
import Search from "./components/search";
import AlbumSearch from "./components/album-search";
// import gromBox from "./components/grom-comps/gromBox"

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

const gromBox = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
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
      <gromBox>
        <h1>Vinyl Bin</h1>
      </gromBox>
      <div>
        <Search />
        {/* <AlbumSearch /> */}
      </div>
      
    </Grommet>
  );
}

export default App;
