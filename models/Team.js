const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    mtrack: {
      type: Number,
      required: true,
      default: 0,
    },
    ftrack: {
      type: Number,
      required: true,
      default: 0,
    },
    mfield: {
      type: Number,
      required: true,
      default: 0,
    },
    ffield: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
