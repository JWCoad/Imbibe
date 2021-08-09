import React from "react";
// import PropTypes from "prop-types";
// import { Test } from './InputField.styles';
import { Field } from "formik";
import { Form as BSForm, Alert } from "react-bootstrap";

const InputField = (props) => {
  const { name, type, placeholder, label, extraText } = props;
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => (
        <div>
          <BSForm.Group className="mb-3">
            <BSForm.Label
              for={`input-label-${name}`}
              className={props.labelClassName}
            >
              {label}
            </BSForm.Label>
            <BSForm.Control
              id={`input-label-${name}`}
              type={type}
              placeholder={placeholder}
              {...field}
              {...props}
              className={`${props.className} ${
                meta.touched && meta.error ? "is-invalid" : ""
              }`}
            />
            {extraText && (
              <BSForm.Text className="text-muted">{extraText}</BSForm.Text>
            )}
            {meta.touched && meta.error && (
              <Alert variant="danger">{meta.error}</Alert>
            )}
            {/* <ErrorMessage name={name} /> */}
          </BSForm.Group>
        </div>
      )}
    </Field>
  );
};

InputField.propTypes = {};

InputField.defaultProps = {};

export default InputField;
