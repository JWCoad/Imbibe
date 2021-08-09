import { gql } from "@apollo/client";
export const FETCH_BOOKINGS = gql`
  query FetchBookings($bookingsFilter: BookingsFilter) {
    bookings(filter: $bookingsFilter) {
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
