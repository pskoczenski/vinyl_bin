import React from "react";
import Nav from "./Nav"
import {
  Box,
  List,
  ListItem,
  Card
} from '@material-ui/core';


const AlbumShow = (props) => {
  console.log("*&*&*&**&*&**&*&**&")
  console.log(props.location.album)

  const {id, title, year, style, country, catno, cover_image, genre} = props.location.album;
  const [label] = props.location.album.label

  return (
    <>
      <Nav />
      <h2>Test</h2>
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
        </Card>
    </>
  )
}

export default AlbumShow;