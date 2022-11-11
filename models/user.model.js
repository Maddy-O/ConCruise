const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    current_location: { type: String, required: true },
    rides: { type: Number, required: true },
    avg_rating: { type: Number, required: true },
  },
  {
    versionKey: false, // removed __v
    timestamps: true, // createdAt, updatedAt
  }
);

module.exports = mongoose.model("user", userSchema);
