const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const app = express();
const db = process.env.MONGO_URI;
mongoose
  .connect(db)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => console.log(`Server Running`));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
