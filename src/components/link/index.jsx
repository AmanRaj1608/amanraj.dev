import React from "react";

import classes from "./link.module.css";

const Link = ({ desc, link = false, title }) => {
  return (
    <div className={classes.wrapper}>
      {link ? (
        <a className={classes.linkTitle} href={link}>
          {title}
        </a>
      ) : (
        <span className={classes.title}>{title}</span>
      )}

      <p className={classes.desc}>{desc}</p>
    </div>
  );
};

export default Link;
