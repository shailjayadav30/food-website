const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const auth = req.headers["authorization"]

  if (!auth) {
    return res.status(403).json({ message: "unauthorized,JWTtoken is required" });
  }

  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded token to request
    next();
  } catch (error) {
    res.status(403).json({ message: "unauthorized,JWTtoken is wrong or expired" });
  }
};

module.exports = authenticate;
