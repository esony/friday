import React, { useState } from "react";
import css from "./Header.module.css";
import { IoMdMenu } from "react-icons/io";
import SideBar from "./Sidebar";

function Header() {
  const [sideBarOpen, toggleSideBar] = useState(false);

  return (
    <div id="Header">
      <div className={css.header}>
        <div
          className={css.sidebarButton}
          onClick={() => toggleSideBar(!sideBarOpen)}
        >
          <IoMdMenu />
        </div>
        <div className={css.logo}>FRIDAY</div>
      </div>
      <SideBar isOpen={sideBarOpen} toggleSideBar={toggleSideBar} />
      <div
        className={sideBarOpen ? css.overlay : undefined}
        onClick={() => toggleSideBar()}
      />
      <img src="digiahub.png" alt="" className={css.hubLogo} />
    </div>
  );
}

export default Header;
