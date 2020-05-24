import React from "react";

import imgSrc from "../../images/picture.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="Aman Raj"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Aman Raj</h1>
        <h2>Student - Full-Stack Developer</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
