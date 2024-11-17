const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["user", "admin"] },
});
const usermodel = mongoose.model("users", userSchema);

module.exports = usermodel;
