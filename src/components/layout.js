import PropTypes from "prop-types";
import React from "react";
import "@fontsource/dm-sans";

import Header from "./header";
import { Footer } from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
