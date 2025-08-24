import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirmPassword do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash Password Here

    // https://avatar-placeholder.iran.liara.run/ gives avatar
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("loginUser");
  console.log("loginUser");
};

export const logout = (req, res) => {
  res.send("logoutUser");
  console.log("logoutUser");
};
