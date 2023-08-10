import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import AMainNavbar from "../components/layout/MainNavbar/AdminMainNavbar";
import AMainSidebar from "../components/layout/AdminMainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout = ({ children, noNavbar, noFooter }) => {
  const [user,setUser]=useState(localStorage.getItem('user'))

  console.log(user)
  if (user==='admin') {
  return(
  <Container fluid>
    <Row>
      <AMainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <AMainNavbar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
  );
  }else if(user=='emp'){
    return(
      <Container fluid>
      <Row>
        <MainSidebar />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          {!noNavbar && <MainNavbar />}
          {children}
          {!noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
    )
  }else{
    return(
      <Container fluid>
    </Container>
      )
  }
};

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
