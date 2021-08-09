import React, { useContext } from "react";

import { Nav } from "react-bootstrap";
import history from "../../utilities/history";
import { LoginContext } from "../../utilities/contexts/login-context";
import { redirectToDashboard } from "../../utilities/navigation-helper";
import styles from "./PageHeader.module.css";

const PageHeader = (props) => {
  const userInfoContext = useContext(LoginContext);
  const handleClick = (selectedKey) => {
    if (selectedKey !== "logout") {
      history.push(selectedKey);
    } else {
      handleLogout();
      redirectToDashboard();
    }
  };
  const handleLogout = () => {
    userInfoContext.setUserInfo(null);
  };
  return (
    <div className={styles.navColor}>
      <Nav
        className="justify-content-center"
        activeKey="/home"
        onSelect={handleClick}
      >
        <Nav.Item>
          <Nav.Link eventKey="/">Imbibe</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/menu">Menu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/bookings">Bookings</Nav.Link>
        </Nav.Item>
        {!userInfoContext.userInfo && (
          <Nav.Item>
            <Nav.Link eventKey="/login">Login</Nav.Link>
          </Nav.Item>
        )}
        {userInfoContext.userInfo && (
          <Nav.Item>
            <Nav.Link eventKey="logout">Logout</Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </div>
  );
};

PageHeader.propTypes = {};

PageHeader.defaultProps = {};

export default PageHeader;
