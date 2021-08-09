import React from "react";

import Page from "../../components/Page";

import { Image, Row } from "react-bootstrap";
import LandingPageImage from "../../assets/images/bar.jpg";
import { sampleDescriptionText } from "./data";

const LandingPage = (props) => (
  <Page className="LandingPageWrapper">
    <Row>
      <Image src={LandingPageImage} fluid />
    </Row>
    <Row style={{ marginTop: "20px" }}>{sampleDescriptionText}</Row>
  </Page>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
