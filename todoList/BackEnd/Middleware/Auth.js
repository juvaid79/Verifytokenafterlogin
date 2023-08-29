const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  try {
    const _bearerToken = req.headers["authorization"];
    const _token = _bearerToken.split(" ")[1];
    const _verifyToken = jwt.verify(_token, "SecretKey");
    if (_verifyToken) {
      req.user = _verifyToken.token;
      next();
    } else {
      return res.status(403).json({ msg: "Unauthorized user!!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({  msg: error });
  }
};

module.exports = Auth;