import PropTypes from "prop-types";
import React from "react";

import Container from "../container";

import "./normalize.css";
import "./global.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
