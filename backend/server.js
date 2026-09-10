require("dotenv").config();
const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')

const authRout = require("./route/auth")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth",  authRout);




const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      "Database connection failed:",
      error.message
    );
  });