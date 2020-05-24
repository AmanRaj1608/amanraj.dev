import React from "react";

import classes from "./section.module.css";

const Section = ({ children, id, title }) => {
  return (
    <section id={id} className={classes.wrapper}>
      <div className={classes.left}>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div className={classes.right}>{children}</div>
    </section>
  );
};

export default Section;
