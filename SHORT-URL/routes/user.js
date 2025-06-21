const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);


router.post("/logout", (req, res) => {
  res.clearCookie("uid");         // 'uid' is the name of the auth token cookie
  res.redirect("/login");         // Redirect to login after logout
});

module.exports = router;
