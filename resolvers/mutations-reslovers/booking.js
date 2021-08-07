const BookingModel = require("../../models/booking-model");
// const _ = require("lodash");

const createBooking = (parent, { bookingData }, context) => {
  const booking = new BookingModel(bookingData);
  booking.save();
  return booking;
};
const confirmBooking = async (parent, { bookingId, status }, context) => {
  const booking = await BookingModel.findOneAndUpdate(
    { _id: bookingId },
    { confirmed: status }
  );
  return booking;
};
const deleteBooking = async (parent, { bookingId }, context) => {
  try {
    const booking = await BookingModel.findOne({ _id: bookingId });
    if (!booking) {
      return {
        status: false,
        message: "Booking Doesn't Exists",
      };
    }
    await BookingModel.deleteOne({ _id: bookingId });
  } catch (e) {
    return { status: false, message: e.message };
  }
  return { status: true, message: "" };
};
module.exports = {
  createBooking,
  confirmBooking,
  deleteBooking,
};
