import React, { PureComponent } from "react";

import { Container } from "react-bootstrap";
import PageHeader from "../PageHeader";
import styles from "./Layout.module.css";

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
    return { hasError: true };
  }

  componentDidCatch(error, info) {}

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

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
