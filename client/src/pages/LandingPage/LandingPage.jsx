//set up page
import React from "react";

import Page from "../../components/Page";

import { Image, Row } from "react-bootstrap";
import LandingPageImage from "../../assets/images/bar2.jpg";
import { sampleDescriptionText } from "./data";
import styles from "./LandingPage.module.css";

const LandingPage = (props) => (
  <Page className="LandingPageWrapper">
    <Row>
      <Image style={{ height: 700 }} src={LandingPageImage} fluid />
    </Row>
    <Row style={{ margin: "40px" }}>{sampleDescriptionText}</Row>
  </Page>
);
//style={{ margin: "50px" }}
LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
