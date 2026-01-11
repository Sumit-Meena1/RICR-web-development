import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, phone, email, password } = req.body;

    if (!fullName || !phone || !email || !password) {
      // return res.status(400).json({ message: "All fields are required" });
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // return res.status(409).json({ message: "User already exists" });
      const error = new Error("User already exists");
      error.statusCode = 409;
      return next(error);
    }

    const newUser = await User.create({
      fullName,
      phone,
      email,
      password,
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    next(error);
    // return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      // return res.status(400).json({ message: "All fields are required" });
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      // return res.status(404).json({ message: "User Not Found" });
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      // return res.status(401).json({ message: "User Not Authorized" });
      const error = new Error("User Not Authorized");
      error.statusCode = 401;
      return next(error);
    }

    console.log(existingUser);
    return res.status(200).json({ message: "Welcome Back" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogout = (req, res, next) => {
  try {
    return res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, phone, email } = req.body;
    if (!fullName || !phone || !email) {
      // return res.status(400).json({ message: "All fields are required" });
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      // return res.status(404).json({ message: "User Not Found" });
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    existingUser.fullName = fullName;
    existingUser.phone = phone;

    await existingUser.save();
    res
      .status(200)
      .json({ message: "User Updated Successfully", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
