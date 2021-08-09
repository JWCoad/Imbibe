import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './MenusPage.styles';
import image1 from "../../assets/images/cocktail.jpg";
import image3 from "../../assets/images/cocktail3.jpg";
import image4 from "../../assets/images/cocktail4.jpg";
import image6 from "../../assets/images/cocktail6.jpg";
import image7 from "../../assets/images/cocktail7.jpg";
import image8 from "../../assets/images/cocktail8.jpg";
import MenuCard from "../../components/MenuCard/MenuCard";
import { Row } from "react-bootstrap";
import Page from "../../components/Page";
import styles from "./MenusPage.module.css";
const MENUS = [
  {
    name: "Beverage 1",
    picture: image1,
    description: "A tasty drink",
  },
  {
    name: "Beverage 2",
    picture: image3,
    description: "Also a tasty drink",
  },
  {
    name: "Beverage 3",
    picture: image6,
    description: "It has fruit in it",
  },
  {
    name: "Beverage 4",
    picture: image8,
    description: "Even more fruit",
  },
  // {
  //   name: "Beverage 5",
  //   picture: image8,
  //   description: "Served in a chilled tin cup",
  // },
  // {
  //   name: "Beverage 6",
  //   picture: image1,
  //   description: "This has no ice",
  // },
  // {
  //   name: "Beverage 7",
  //   picture: image1,
  //   description: "This is very sour",
  // },
  // {
  //   name: "Beverage 8",
  //   picture: image1,
  //   description: "This is very sweet",
  // },
];

const MenusPage = (props) => (
  <Page className="MenusPageWrapper">
    <Row className={styles.cardframe}>
      {MENUS.map((menu) => {
        return <MenuCard {...menu} />;
      })}
    </Row>
  </Page>
);

MenusPage.propTypes = {
  // bla: PropTypes.string,
};

MenusPage.defaultProps = {
  // bla: 'test',
};

export default MenusPage;
