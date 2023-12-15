const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    first: {
      type: String,
      required: true,
      default: "NA",
    },
    second: {
      type: String,
      required: true,
      default: "NA",
    },
    third: {
      type: String,
      required: true,
      default: "NA",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
