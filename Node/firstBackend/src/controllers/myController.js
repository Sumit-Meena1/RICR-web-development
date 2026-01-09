import User from "../models/userModel.js";

export const UserRegister = async (req, res) => {
  try {
    const { Fullname, phone, email, password } = req.body;
    if (!Fullname || !phone || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await User.create({ Fullname, phone, email, password });
    console.log(newUser);
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      return res.status(401).json({ message: "User Not Authorized" });
    }

    console.log(existingUser);
    return res.status(200).json({ message: "Welcome Back" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogout = (req, res) => {
  try {
    return res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};