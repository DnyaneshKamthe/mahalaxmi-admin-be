// user.models.js
const mongoose = require("mongoose");

const userMasterSchema = new mongoose.Schema(
  {
    game: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    upiId: {
      type: String,
    },
    otp: {
      type: Number,
    },
    coins: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    requestedAmount: {
      type: Number,
    },
    paymentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment",
      },
    ],
    game_version: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserMaster = mongoose.model("UserMaster", userMasterSchema);
module.exports = UserMaster;
