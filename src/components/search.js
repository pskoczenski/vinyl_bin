import React, { useState } from "react";

const Search = () => {
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState("");
  const setUrl = query => `https://api.discogs.com/database/search?q={
    ${query}}&format=vinyl&type=release&token=JkxSftiJlhpPweROvvpAicjcsQWekgpKXYMqsAfY`;
  //   const query = "Reflektor";

  const AlbumSearch = () => {
    async function fetchData(query) {
      const res = await fetch(setUrl(query));
      res
        .json()
        .then(res => setAlbums(res.results))
        .catch(err => console.log(err));
    }
    console.log(albums[0]);

    fetchData(query);
    setQuery("");
  };

  const AlbumsList = ({albums}) => {
    return albums.map(album => {
      const {id, title, year, style, country, catno, cover_image} = album;
      const [label] = album.label
      return (
            <ul key={id} className="album-show">
              <img src={cover_image} style={{ width: "150px" }} alt={cover_image} />
              <li > Title: {title}</li>
              <li> Year: {year}</li>
              <li> Style: {style}</li>
              <li> Country: {country}</li>
              <li> CatalogNo: {catno}</li>
              <li> Label: {label}</li>
            </ul>
        )
    })
  };

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
      <AlbumsList albums={albums}/>
    </div>
  );
};

export default Search;