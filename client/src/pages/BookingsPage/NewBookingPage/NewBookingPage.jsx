import React from "react";

import Page from "../../../components/Page";
import { Row } from "react-bootstrap";
import NewBookingForm from "./NewBookingForm";
import { useMutation } from "@apollo/client";
import { CREATE_BOOKING } from "../../../graphql/mutations/bookings";
import _ from "lodash";
import { redirectToDashboard } from "../../../utilities/navigation-helper";
import styles from "./NewBookingPage.module.css";

const NewBookingPage = (props) => {
  const [createBooking] = useMutation(CREATE_BOOKING);

  const parseDataForApi = (data) => {
    const _data = _.cloneDeep(data);
    _data.noOfPeople = parseInt(_data.noOfPeople);
    return _data;
  };
  const handleCreateBooking = async (formData) => {
    try {
      await createBooking({
        variables: {
          createBookingBookingData: parseDataForApi(formData),
        },
      });
      alert("Your booking inquiry created successfully");
      redirectToDashboard();
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <Page className="NewBookingPageWrapper">
      <Row className={styles.bannerColor}>
        <h1 className="text-center">Make a Booking Inquiry</h1>
      </Row>
      <Row>
        <NewBookingForm handleCreateBooking={handleCreateBooking} />
      </Row>
    </Page>
  );
};

NewBookingPage.propTypes = {};

NewBookingPage.defaultProps = {};

export default NewBookingPage;
