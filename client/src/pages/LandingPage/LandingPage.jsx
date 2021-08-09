import React from "react";

import Page from "../../components/Page";

import { Image, Row } from "react-bootstrap";
import LandingPageImage from "../../assets/images/bar.jpg";
import { sampleDescriptionText } from "./data";
import styles from "./LandingPage.module.css";

const LandingPage = (props) => (
  <Page className="LandingPageWrapper">
    <Row classname={styles.LandingpageWrapper}>
      <Image src={LandingPageImage} fluid />
    </Row>
    <Row style={{ marginTop: "30px" }}>{sampleDescriptionText}</Row>
  </Page>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
