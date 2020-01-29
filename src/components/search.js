import React, { useState } from "react";
// import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  Card
} from '@material-ui/core';


const Search = () => {
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState("");
  const setUrl = query => `https://api.discogs.com/database/search?q={
    ${query}}&format=vinyl&type=release&token=JkxSftiJlhpPweROvvpAicjcsQWekgpKXYMqsAfY`;

  const AlbumSearch = () => {
    async function fetchData(query) {
      const res = await fetch(setUrl(query));
      res
        .json()
        .then(res => setAlbums(res.results))
        .catch(err => console.log(err));

    }
    fetchData(query);
    setQuery("");
  };

  const AlbumsList = ({albums}) => {
    return albums.map(album => {
      const {id, title, year, style, country, catno, cover_image, genre} = album;
      const [label] = album.label
      return (
        <Card variant="outlined" m={1}>
          <Box display="flex" alignItems="center" >
            <Box m={2} width="50%" justifyContent="center" alignItems="center">
              <img src={cover_image} style={{ width: "150px" }} alt={cover_image} />
              <h3>{title}</h3>
            </Box>
            <Box>
              <List key={id}>
                <ListItem>Year: {year}</ListItem>
                <ListItem>Country: {country}</ListItem>
                <ListItem>Label: {label}</ListItem>
                <ListItem>Genre: {genre}</ListItem>
                <ListItem>Style: {style}</ListItem>
                <ListItem>Catalog #: {catno}</ListItem>
              </List>
            </Box>
            <Link to={{ pathname: "/album", album: album }}>
              <Button>Select Album</Button>
            </Link>
          </Box>
        </Card>
      )
    })
  };

  return (
    <>
    <Box component='h1'>Welcome to Vinyl Bin!</Box>
    <Box component='p'>
      You can start here by searching for your favorite Vinyl Records by album title
    </Box>
    <Link to="collection">View Collection</Link>
    <Box mt={4} display="flex" alignItems="center">
      <TextField id="outlined-search" value={query} label="Album Title" type="search" variant="outlined" onChange={e => setQuery(e.target.value)} />
      <Box mb={0} ml={1}>
        <Button id="albumSearchSubmit" variant="contained" color="primary"  onClick={() => AlbumSearch()}>
          Search
        </Button>
      </Box>
    </Box>
    <AlbumsList albums={albums}/>
    </>
  );
};

export default Search;