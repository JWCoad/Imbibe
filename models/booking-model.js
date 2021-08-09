const mongoose = require("mongoose");

const BookingModel = mongoose.model("Bookings", {
  name: {
    type: String,
    require: true,
    trim: true,
  },
  noOfPeople: {
    type: Number,
    trim: true,
  },
  contactNumber: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
  },
  comment: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = BookingModel;
