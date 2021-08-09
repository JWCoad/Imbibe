import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
//import { Test } from "./NewBookingForm.styles";
import { Formik, Form, Field } from "formik";
import InputField from "../../../../components/InputField";
import { DatePicker } from "antd";
import { Alert, Button } from "react-bootstrap";
import NewBookingValidationSchema from "./NewBookingValidationSchema";
import styles from "./NewBookingForm.module.css";

class NewBookingForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      initialValues: {
        name: "",
        noOfPeople: "",
        contactNumber: "",
        date: "",
        comment: "",
      },
    };
  }

  componentDidMount = () => {
    console.log("NewBookingForm mounted");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NewBookingFormWrapper">
        <div className={styles.formColor}>
          <Formik
            initialValues={this.state.initialValues}
            validationSchema={NewBookingValidationSchema}
            onSubmit={(values) => {
              this.props.handleCreateBooking(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <InputField name="name" label="Name" />
                <InputField
                  name="noOfPeople"
                  label="Number of People"
                  type="number"
                />
                <InputField name="contactNumber" label="Contact Number" />
                <Field name="date">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors, setFieldValue },
                    meta,
                  }) => (
                    <div>
                      <label for={`input-date`}>Date & Time</label>
                      <DatePicker
                        showTime
                        id={`input-date`}
                        className={`form-control input mt-2 ${
                          meta.touched && meta.error ? "is-invalid" : ""
                        }`}
                        onChange={(value) =>
                          setFieldValue("date", value.toISOString())
                        }
                      />
                      {meta.touched && meta.error && (
                        <Alert variant="danger">{meta.error}</Alert>
                      )}
                    </div>
                  )}
                </Field>
                <InputField
                  name="comment"
                  label="Comments"
                  labelClassName="mt-3"
                />
                <Button type="submit" className="float-end">
                  Confirm Booking
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      // </div>
    );
  }
}

NewBookingForm.propTypes = {
  // bla: PropTypes.string,
};

NewBookingForm.defaultProps = {
  // bla: 'test',
};

export default NewBookingForm;
