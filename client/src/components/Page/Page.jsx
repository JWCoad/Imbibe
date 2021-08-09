import React from "react";
import { Container } from "react-bootstrap";

const Page = (props) => (
  <Container className="PageWrapper"> {props.children}</Container>
);

Page.propTypes = {};

Page.defaultProps = {};

export default Page;
