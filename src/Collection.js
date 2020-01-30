import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Auth";
import NavDrawer from "./NavDrawer"
import Nav from "./Nav"
import { Container } from "@material-ui/core";
import { db }  from "./base";
import {
  Box,
  List,
  ListItem,
  Card
} from '@material-ui/core';

const userCollectionArray = []

const Collection = () => {
  const {currentUser} = useContext(AuthContext);
  const userId = currentUser.uid
  const [userCollection, setUserCollection] = useState(null)

  useEffect(() => {
    const porcupine = () => {
      const albums = db.collection('albums');
      albums.where('user_id', '==', userId).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          userCollectionArray.push(doc.data())
        });
        setUserCollection(userCollection => [userCollection, userCollectionArray])
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    }
    porcupine()
  }, [userId])

  
  const AlbumsList = ({pineapple}) => {
    return pineapple.map(album => {
      const {id, title, year, style, country, catno, cover_image, genre} = album;
      const [label] = album.label
      return (
        <Card key={catno} variant="outlined" m={2}>
          <Box display="flex" alignItems="center" >
            <Box m={2} width="50%" justifyContent="center" alignItems="center">
              <img src={cover_image} style={{ width: "150px" }} alt={cover_image} />
              <h3>{title}</h3>
            </Box>
            <Box>
              <List>
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
      )
    })
  };

  return (
    <>
    <NavDrawer />
    <Container>
      <h1>View Your Collection</h1>
      <AlbumsList pineapple={userCollectionArray}/>
    </Container>
    </>
  )
}

export default Collection;
