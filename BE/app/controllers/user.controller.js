const User = require("../services/user.service");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require('bcryptjs');

const endcodedToken = (username) => {
  return jwt.sign(
    {
      iss: "Tran Lam Huy",
      sub: username,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    JWT_SECRET
  );
};
module.exports = class userApi {
  static async deleteUser(req, res) {
    const id = req.params.id;
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async getALLUser(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async getUser(req, res) {
    const id = req.params.id;
    try {
      const user = await User.findById(id)
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async updateUser(req, res) {
    try {
      const hashPassword = async (password) =>{
        const salt = await bcrypt.genSalt(10);
        // Generate a password hash (salt + hash)
        const passwordHashed = await bcrypt.hash(password, salt);
        return passwordHashed
      }
      if(req.body.password){
        req.body.password = await hashPassword(req.body.password);
      }
      const id = req.params.id;
      const newUser = req.body;
      const result = await User.findByIdAndUpdate(id, newUser);
      return res.status(200).json({ success: true });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async Register(req, res) {
    const { firstName, lastName, username, password, admin } = req.body;
    const foundUser = await User.findOne({ username });
    if (foundUser) {
      return res.status(403).json({ message: "User already registered" });
    } else {
      try {
        const newUser = await User.create({
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password,
          admin: admin,
        });
        // encode
        const token = endcodedToken(newUser._id);
        res.setHeader("Authorization", token);
        res.status(201).json({ message: "User created successfully!" });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  }
  static async Login(req, res, next) {
    try {
      const user = await User.findOne({ username: req.body.username });
      const token = endcodedToken(req.params.username);
      res.setHeader("Authorization", token);
      res.send(user);
    } catch (error) {
      console.log(error);
    }
  }
};
