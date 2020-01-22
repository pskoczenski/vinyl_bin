import React, { useState } from "react";

const Search = () => {
  const [hasError, setErrors] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState("");
  //   const query = "Reflektor";

  const AlbumSearch = () => {
    async function fetchData() {
      const res = await fetch(
        "https://api.discogs.com/database/search?q={" +
          query +
          "}&format=vinyl&type=release&token=JkxSftiJlhpPweROvvpAicjcsQWekgpKXYMqsAfY"
      );
      res
        .json()
        .then(res => setAlbums(res.results))
        .catch(err => setErrors(err));
    }
    console.log(albums[0]);

    fetchData();
    setQuery("");
  };

  const AlbumsList = props => {
    return (
      <>
        {albums.map(album => (
          <ul className="album-show">
            <img src={album.cover_image} style={{ width: "150px" }} />
            <li key={album.id}> Title: {album.title}</li>
            <li key={album.id + 1}> Year: {album.year}</li>
            <li key={album.id + 2}> Style: {album.style}</li>
            <li key={album.id + 3}> Country: {album.country}</li>
            <li key={album.id + 4}> CatalogNo: {album.catno}</li>
            <li key={album.id + 5}> Label: {album.label[0]}</li>
          </ul>
        ))}
      </>
    );
  };

  console.log(query);

  return (
    <div>
      <br />
      <br />
      <br />
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        id="albumSearch"
        type="text"
        placeholder="Search by Album Title..."
      />
      <button id="albumSearchSubmit" onClick={() => AlbumSearch()}>
        Search
      </button>
      <br />
      <br />
      <br />
      {/* <img src={albums.cover_image} style={{ width: "150px" }} /> */}
      {/* <span>{albums.title}</span> */}
      <AlbumsList />
    </div>
  );
};

export default Search;
