const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String, required: true, trim: true, lowercase: true, max: 100,
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId, ref: "Workspace", required: true,
  },
  tasks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  ],
  bgColor: {
    type: String, trim: true,
  },
  create: {
    at: { type: Date, default: Date.now },
    by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  update: {
    at: { type: Date, default: Date.now },
    by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
});

module.exports = mongoose.model("Project", projectSchema);
