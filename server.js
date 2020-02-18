const express = require("express");
const cors = require("cors");
const app = express();

// Bodyparser middleware
app.use(express.json());

// cors middleware
app.use(
  cors({
    optionsSuccessStatus: 200
  })
);

app.use("/api/shorturl", require("./routes/api/shorturl"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`> Server is listening on port:${PORT}`);
});
