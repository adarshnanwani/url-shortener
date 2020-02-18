const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    optionsSuccessStatus: 200
  })
);

app.get("/", (req, res) => {
  res.json({ msg: "works" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`> Server is listening on port:${PORT}`);
});
