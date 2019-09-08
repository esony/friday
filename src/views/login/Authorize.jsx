import React, { useState, useEffect } from "react";
import css from "./Authorize.module.css";
import Loader from "../../components/Loader/Loader";
import { Redirect } from "react-router-dom";

const Login = props => {
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState(false);

  const authorize = async () => {
    try {
      const code = props.location.search.substring(6);
      if (code) {
        const response = await fetch(
          `http://localhost:3030/api/authorize?code=${code}`
        );

        const { access_token, refresh_token } = await response.json();
        if ((access_token, refresh_token)) {
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
          setAuthorized(true);
        } else {
          setError(true);
        }
      }
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    authorize();
  }, []);

  return (
    <div className={css.view}>
      {authorized === true && <Redirect to="/" />}
      {!error ? <Loader /> : <div>Something went wrong</div>}
    </div>
  );
};

export default Login;
