import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import { Link } from "react-router-dom";

import Nav from "./Nav"
import { db }  from "./base";

import {
  Box,
  Button,
  List,
  ListItem,
  Card,
  Container
} from '@material-ui/core';


const AlbumShow = (props) => {

  const {id, title, year, style, country, catno, cover_image, genre} = props.location.album;
  const [label] = props.location.album.label
  const {currentUser} = useContext(AuthContext);

  const addAlbum = () => {
    db.collection("albums").add({
      artist: "",
      country: country,
      cover_image: cover_image,
      genre: genre,
      label: label,
      style: style,
      title: title,
      user_id: currentUser.uid,
      year: year 
    })
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
        
    })
    .catch(error => {
        console.error("Error adding document: ", error);
    });
    
  }

  return (
    <>
      <Nav />
      <Container>
      <h2> { title } </h2>
      <Card variant="outlined" m={1}>
          <Box display="flex" alignItems="center" >
            <Box m={2} justifyContent="center" alignItems="center">
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
          </Box>
          <Button id="albumSearchSubmit" variant="contained" color="primary"  onClick={() => addAlbum()}>
            Add Album
          </Button>
        </Card>
        <Link to="/collection">View Collection</Link>
        </Container>
    </>
  )
}

export default AlbumShow;