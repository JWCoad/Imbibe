const BookingModel = require("../../models/booking-model");
const _ = require("lodash");

const fetchAllBookings = async (parent, { filter }, context) => {
  if (!_.isEmpty(filter)) {
    return await BookingModel.find({
      date: {
        $gte: filter.startDate,
        $lte: filter.endDate,
      },
    }).sort({ date: "descending" });
  }
  return await BookingModel.find().sort({ date: "descending" });
};

const fetchBooking = async (parent, { id }, context) => {
  const booking = await BookingModel.findOne({
    _id: id,
  });
  return booking;
};

module.exports = {
  bookings: fetchAllBookings,
  booking: fetchBooking,
};
