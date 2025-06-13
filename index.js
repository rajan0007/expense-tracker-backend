const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "node.js is running!" });
});

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK", message: "working....!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
