const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
  title: {
    type: String, required: true, trim: true, lowercase: true, max: 100,
  },
  projects: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Workspace", workspaceSchema);
