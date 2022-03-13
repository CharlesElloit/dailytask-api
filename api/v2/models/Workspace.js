const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
  title: {
    type: String, required: true, trim: true, lowercase: true, max: 100,
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Workspace", workspaceSchema);
