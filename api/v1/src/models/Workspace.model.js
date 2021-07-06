const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
  title: {
    type: String, required: true, trim: true, lowercase: true, max: 100,
  },
  created: {
    at: { type: Date, default: Date.now },
    by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Workspace", workspaceSchema);
