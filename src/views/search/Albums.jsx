import React from "react";
import css from "./Albums.module.css";

const Albums = ({ albums }) => {
  const mapItems = albums.items.map((item, i) => {
    const { name, artists, release_date, images } = item;
    const { url } = images[images.length - 1];

    return (
      <div className={css.item} key={i}>
        <div className={css.thumbnail}>
          <img src={url} alt="" />
        </div>
        <div className={css.details}>
          <div>Album: {name}</div>
          <div>Artists: {artists.map(x => x.name).join(", ")}</div>
          <div>Date: {release_date}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={css.container}>
      <div className={css.title}>Albums</div>
      <div className={css.content}>{mapItems}</div>
    </div>
  );
};

export default Albums;
