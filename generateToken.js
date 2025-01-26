const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: "test-user" }, "your_jwt_secret", { expiresIn: "1h" });
console.log("Generated Token:", token);
