import React, { PureComponent } from "react";

import LoginForm from "./LoginForm/LoginForm";
import Page from "../../components/Page";

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log("LoginPage mounted");
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {}

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("LoginPage getSnapshotBeforeUpdate", prevProps, prevState);
  };

  componentDidUpdate = () => {
    console.log("LoginPage did update");
  };

  componentWillUnmount = () => {
    console.log("LoginPage will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Page className="LoginPageWrapper">
        <LoginForm />
      </Page>
    );
  }
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
