import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
//import { Test } from './Page.styles';
import styles from "./Page.module.css";

const Page = (props) => (
  <Container className="PageWrapper">{props.children}</Container>
);

Page.propTypes = {
  // bla: PropTypes.string,
};

Page.defaultProps = {
  // bla: 'test',
};

export default Page;
