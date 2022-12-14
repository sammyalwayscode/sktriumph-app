const mongoose = require("mongoose");
const shippingSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    username: {
      type: String,
    },
    state: {
      type: String,
    },
    LGA: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    age: {
      type: String,
    },
    orderOTP: {
      type: String,
    },
    delivered: {
      type: Boolean,
      default: false,
    },
    orders: {
      type: Array,
    },
  },
  { timestamps: true }
);

const shipingModel = mongoose.model("shippingOrders", shippingSchema);
module.exports = shipingModel;
