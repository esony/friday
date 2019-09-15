import React from "react";
import css from "./Sidebar.module.css";
import classNames from "classnames";
import { MdSearch, MdQueueMusic, MdFormatListBulleted } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSideBar }) => {
  return (
    <div className={classNames(css.sidebar, { [css.open]: isOpen })}>
      <div>
        <Link to="/search" className={css.row} onClick={() => toggleSideBar()}>
          <MdSearch />
          <div className={css.rowText}>Search</div>
        </Link>
        <Link to="/queue" className={css.row} onClick={() => toggleSideBar()}>
          <MdQueueMusic />
          <div className={css.rowText}>Queue</div>
        </Link>
        <Link
          to="/playlists"
          className={css.row}
          onClick={() => toggleSideBar()}
        >
          <MdFormatListBulleted />
          <div className={css.rowText}>Playlists</div>
        </Link>
        <Link to="/login" className={css.row} onClick={() => toggleSideBar()}>
          <IoIosLogIn />
          <div className={css.rowText}>Login</div>
        </Link>
      </div>
      <div className={css.bottom}>
        Powered by
        <img src="Spotify_Logo_RGB_Green.png" alt="" className={css.spotifyLogo} />
      </div>
    </div>
  );
};

export default Sidebar;
