const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: { type: Boolean, default: false, required: true },
});
//  ma hoa mat khau
userSchema.pre("save", async function (next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Generate a password hash (salt + hash)
    const passwordHashed = await bcrypt.hash(this.password, salt);
    // reassign the password hashed
    this.password = passwordHashed;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};
const User = mongoose.model("User", userSchema);

module.exports = User;
