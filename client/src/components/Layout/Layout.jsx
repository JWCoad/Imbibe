import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
//import { Test } from "./Layout.styles";
import { Container } from "react-bootstrap";
import PageHeader from "../PageHeader";

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log("Layout mounted");
  };

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("Layout getDerivedStateFromProps", nextProps, prevState);
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Layout getSnapshotBeforeUpdate", prevProps, prevState);
  };

  componentDidUpdate = () => {
    console.log("Layout did update");
  };

  componentWillUnmount = () => {
    console.log("Layout will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Container className="LayoutWrapper">
        <PageHeader />
        {this.props.children}
      </Container>
    );
  }
}

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
