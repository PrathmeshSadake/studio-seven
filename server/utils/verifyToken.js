const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ message: "You're not authenticated" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token is invalid!", error });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "You're not authorised!" });
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
