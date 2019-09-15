import React, { useEffect, useState } from "react";
import css from "./Playlists.module.css";

const Search = () => {
  const [userPlaylists, setUserPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      const { items } = await response.json();
      items && setUserPlaylists(items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const mapPlaylists = userPlaylists.map((item, i) => (
    <div key={i}>{item.name}</div>
  ));

  return (
    <div className={css.view}>
      <div className={css.title}>Playlists</div>
      <div className={css.list}>{userPlaylists && mapPlaylists}</div>
    </div>
  );
};

export default Search;
