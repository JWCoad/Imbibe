import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import moment from "moment";
//set up booked info
const BookingInfoCard = (props) => {
  return (
    <Col md={6} style={{ marginTop: "10px" }}>
      <Card>
        <Card.Body>
          <Card.Text>{props.name}</Card.Text>
          <Card.Text>{props.noOfPeople}</Card.Text>
          <Card.Text>{props.contactNumber}</Card.Text>
          <Card.Text>
            {moment(props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")} (
            {moment(props.date).fromNow()})
          </Card.Text>
          <Card.Text>{props.comment}</Card.Text>

          <Card.Footer>
            <Row>
              <Col xs={12} md={8} className="mt-3">
                <input
                  type="checkbox"
                  id={`confirm-booking-${props._id}`}
                  checked={props.confirmed}
                  onChange={(e) =>
                    props.handleChangeBookingConfirmation(
                      e.target.checked,
                      props._id
                    )
                  }
                />{" "}
                <label
                  style={{ cursor: "pointer" }}
                  for={`confirm-booking-${props._id}`}
                >
                  Confirm Booking
                </label>
              </Col>
              <Col xs={12} md={4}>
                <Button
                  variant={"danger"}
                  onClick={(e) => props.handleDeleteBooking(props._id)}
                >
                  Delete Booking
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

BookingInfoCard.propTypes = {};

BookingInfoCard.defaultProps = {};

export default BookingInfoCard;
