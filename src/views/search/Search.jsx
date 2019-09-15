import React, { useState } from "react";
import css from "./Search.module.css";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(undefined);
  const [searchResults, setSearchResults] = useState("");

  const fetchResults = async searchString => {
    if (!searchString) return;
    const response = await fetch(
      "https://api.spotify.com/v1/search" +
        `?q=${encodeURIComponent(searchString)}` +
        "&type=album,artist,playlist,track" +
        "&limit=3",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      }
    );
    const results = await response.json();
    if (results) {
      setSearchResults(results);
    }
  };

  const updateSearch = async value => {
    setSearchInput(value);
    clearTimeout(searchTimeout);

    const newSearch = setTimeout(() => {
      if (!value) return;
      fetchResults(value);
    }, 500);

    setSearchTimeout(newSearch);
  };

  return (
    <div className={css.view}>
      <div className={css.title}>Search</div>
      <input
        type="text"
        className={css.searchInput}
        value={searchInput}
        onChange={e => updateSearch(e.target.value)}
        placeholder="Artists, albums, tracks, playlists"
      />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default Search;
