import React from "react";
import PropTypes from "prop-types";

const MainFooter = ({ copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
      <center><span className="copyright ml-auto my-auto mr-2">{copyright}</span></center>
  </footer>
);

MainFooter.propTypes = {
   /** The copyright info.**/
  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  copyright: "Copyright © 2023 JNTN"
};

export default MainFooter;
