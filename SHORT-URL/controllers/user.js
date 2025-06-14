const User = require("../model/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  try {
    await User.create({ name, email, password });
    return res.redirect("/login");
  } catch (err) {
    return res.status(500).send("Error signing up user");
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("login", {
      error: "Invalid Username or Password",
    });
  }

  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};