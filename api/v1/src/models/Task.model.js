/**
 * Task Model
 */
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  done: { type: Boolean, default: false },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  due: { type: Date, default: Date.now, required: true },
  priority: {
    type: String, trim: true, default: "low", lowcase: true, max: 6,
  },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  type: {
    oneTime: { type: String },
    recurring: {
      duration: { type: String },
      // This determines when is it happening, eg, daily, weekly etc and it is onces or twices.
      pattern: {
        when: { // Daily, weekly, monthly or yearly.
          daily: { type: String, trim: true },
          weekly: {
            day: { type: String, trim: true },
          },
          monthly: {
            day: { type: Date },
          },
          yearly: {
            month: { type: String, trim: true },
            week: { type: String },
            day: { type: String },
          },
        },
        every: { type: Number, default: 1 }, // it is once, twices etc.
      },
      range: {
        start: { type: Date, default: Date.now }, // starting time.
        end: { type: Date, default: Date.now }, // ending time.
      },
    },
  },
  created: {
    At: { type: Date, default: Date.now },
    by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  updated: {
    at: { type: Date, default: Date.now },
    by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
});

module.exports = mongoose.model("Task", taskSchema);
