import React, { useContext } from "react";
// import PropTypes from "prop-types";
//import { Test } from './PageHeader.styles';
import { Nav } from "react-bootstrap";
import history from "../../utilities/history";
import { LoginContext } from "../../utilities/contexts/login-context";
import { redirectToDashboard } from "../../utilities/navigation-helper";

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
    <Nav
      className="justify-content-center"
      activeKey="/home"
      onSelect={handleClick}
    >
      <Nav.Item>
        <Nav.Link eventKey="/">BarName</Nav.Link>
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
  );
};

PageHeader.propTypes = {
  // bla: PropTypes.string,
};

PageHeader.defaultProps = {
  // bla: 'test',
};

export default PageHeader;
