import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Auth";
import Nav from "./Nav"
import { Container } from "@material-ui/core";
import { db }  from "./base";
import {
  Box,
  List,
  ListItem,
  Card
} from '@material-ui/core';



const Collection = () => {
  const {currentUser} = useContext(AuthContext);
  const userId = currentUser.uid
  const [userCollection, setUserCollection] = useState([])
  const userCollectionArray = []


  let albums = db.collection('albums');
  let query = albums.where('user_id', '==', userId).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  

      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        userCollectionArray.push(doc.data())
      });

    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

    setUserCollection(userCollectionArray)


    // useEffect(() => {
    //   setUserCollection(userCollectionArray)
    //   console.log("USER COLLECTION ==", )
    // }, [])

  const AlbumsList = ({albums}) => {
    return albums.map(album => {
      const {id, title, year, style, country, catno, cover_image, genre} = album;
      const [label] = album.label
      return (
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
      )
    })
  };
    

  return (
    <>
    <Nav />
    <Container>
      <h1>Hello Collection</h1>
    </Container>
    <AlbumsList albums={userCollection}/>
    </>
  )

}


export default Collection;
