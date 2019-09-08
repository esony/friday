import React from "react";
import css from "./Login.module.css";

const Login = props => {
  const redirect_uri = "http://localhost:3000/authorize";
  const client_id = "d286c64a46b240039fe0f99a544ac320";
  const scopes = "user-read-email playlist-modify-private";

  const spotifyAuth =
    "https://accounts.spotify.com/authorize" +
    "?response_type=code" +
    "&client_id=" +
    client_id +
    (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri);

  return (
    <div className={css.view}>
      <a href={spotifyAuth}>
        <div className={css.button}>Login</div>
      </a>
      <div className={css.button}>Join</div>
    </div>
  );
};

export default Login;
