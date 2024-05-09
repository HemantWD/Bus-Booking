import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../modal/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // validtaion
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }

    // checking if user already exits
    const existingUser = await userModel.findOne({ email });
    // if existing user
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Already registered please Login",
      });
    }

    // register if not existing
    const hashedPassword = await hashPassword(password);
    const user = await userModel({
      name,
      email,
      phone,
      password: hashedPassword,
      address,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unable to register",
      error,
    });
  }
};

// Login  Validation
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // checking user

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparePassword(password, user.password);
    // validation of password

    if (!match) {
      return res.status(404).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // creating token for crypting password using JWT
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Logged In Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
    });
  }
};
