import history from "./history";
export const redirectToDashboard = () => {
  return history.push("/");
};

export const redirectToMenus = () => {
  return history.push("/menu");
};

export const redirectToBookings = () => {
  return history.push("/bookings");
};

export const redirectToLogin = () => {
  return history.push("/login");
};
