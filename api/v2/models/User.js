const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    email: true,
    max: 255,
    lowercase: true,
  },
  username: {
    type: String, required: true, trim: true, unique: true,
  },
  avatar: {
    type: String,
    max: 255,
    default: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
  },
  password: {
    type: String, required: true, max: 255, select: false,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
