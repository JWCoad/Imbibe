import React, { useContext } from "react";
import { LoginContext } from "../../utilities/contexts/login-context";
import BookingsListingPage from "./BookingsListingPage";
import NewBookingPage from "./NewBookingPage";

const BookingsPage = (props) => {
  const loginContext = useContext(LoginContext);
  return (
    <div className="BookingsPageWrapper">
      {loginContext.userInfo && <BookingsListingPage />}
      {!loginContext.userInfo && <NewBookingPage />}
    </div>
  );
};

BookingsPage.propTypes = {
  //
};

BookingsPage.defaultProps = {
  //
};

export default BookingsPage;
