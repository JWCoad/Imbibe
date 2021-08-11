// pull in elements
import React, { PureComponent } from "react";

import { Form, Formik } from "formik";
import { Button, Col, Row, Alert } from "react-bootstrap";
import InputField from "../../../components/InputField";
import { Container } from "react-bootstrap";
import { fetchLoginUser } from "../../../utilities/services/authentication";
import { redirectToBookings } from "../../../utilities/navigation-helper";
import { LoginContext } from "../../../utilities/contexts/login-context";
import styles from "./LoginForm.module.css";
//login element, check for matching values
// const cStyle = {
//   border: "5px solid pink",
// };

class LoginForm extends PureComponent {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      initialvalues: {
        password: "",
        email: "",
      },
      errorMessage: "",
    };
  }
  onFormSubmit = (values, actions) => {
    const fetchedUser = fetchLoginUser(values.email, values.password);
    if (fetchedUser) {
      this.setErrorMessage("");
      try {
        this.context.setUserInfo(fetchedUser);
      } catch (error) {
        console.log("error", error.message);
      }
      redirectToBookings();
    } else {
      this.setErrorMessage("Invalid Email/Password Provided.");
    }

    actions.setSubmitting(false);
  };

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }
  // render page and form
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoginFormWrapper">
        <Container>
          <Row className={styles.border}>
            <Col md={3} s={12}></Col>
            <Col md={6} s={12}>
              <Row>
                <h1 className="text-center mt-5">Login</h1>
              </Row>
              <Row>
                <Formik
                  initialValues={this.state.initialvalues}
                  onSubmit={this.onFormSubmit}
                >
                  <Form>
                    <InputField name="email" type="email" placeholder="Email" />
                    <InputField
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    {this.state.errorMessage && (
                      <Row>
                        <Alert variant="danger">
                          {this.state.errorMessage}
                        </Alert>
                      </Row>
                    )}
                    <Button type="submit" className="float-end">
                      Login
                    </Button>
                  </Form>
                </Formik>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};
export default LoginForm;
