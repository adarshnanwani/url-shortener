const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Bodyparser middleware
app.use(express.json());

// cors middleware
app.use(
  cors({
    optionsSuccessStatus: 200
  })
);

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;

connection.once("open", () => console.log("MongoDB connected successfully"));

app.use("/api/shorturl", require("./routes/api/shorturl"));

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`> Server is listening on port:${PORT}`);
});
