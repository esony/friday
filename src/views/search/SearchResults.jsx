import React from "react";
import css from "./SearchResults.module.css";
import Albums from "./Albums";

const SearchResults = ({ results }) => {
  const { albums } = results;

  return (
    <div className={css.container}>
      {!results && "No Results"}
      {albums && <Albums albums={albums} />}
    </div>
  );
};

export default SearchResults;
