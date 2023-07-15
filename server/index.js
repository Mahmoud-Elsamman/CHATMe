const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", userRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
