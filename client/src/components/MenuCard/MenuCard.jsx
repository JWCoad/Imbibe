import React from "react";
import PropTypes from "prop-types";
//import { Test } from './MenuCard.styles';
import image1 from "../../assets/images/cocktail.jpg";
import { Card, Col } from "react-bootstrap";
import styles from "./MenuCard.module.css";

const MenuCard = ({ name, picture, description }) => (
  <Col md={3} style={{ marginTop: "10px" }}>
    <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

MenuCard.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
};

MenuCard.defaultProps = {
  name: "Card Name",
  picture: image1,
  description: "some description",
};

export default MenuCard;
