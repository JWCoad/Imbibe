import { gql } from "@apollo/client";
export const CONFIRM_BOOKING = gql`
  mutation ConfirmBookingMutation(
    $confirmBookingBookingId: ID
    $confirmBookingStatus: Boolean
  ) {
    confirmBooking(
      bookingId: $confirmBookingBookingId
      status: $confirmBookingStatus
    ) {
      _id
      name
      noOfPeople
      contactNumber
      date
      comment
      confirmed
    }
  }
`;

export const DELETE_BOOKING = gql`
  mutation DeleteBookingMutation($deleteBookingBookingId: ID) {
    deleteBooking(bookingId: $deleteBookingBookingId) {
      status
      message
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation CreateBookingMutation(
    $createBookingBookingData: CreateBookingInput
  ) {
    createBooking(bookingData: $createBookingBookingData) {
      _id
      name
      noOfPeople
      contactNumber
      date
      comment
      confirmed
    }
  }
`;
