const express = require("express");
const router = express.Router();
const ShortUrl = require("../../models/shorturl.model");
const util = require("../../utils/Util");

router.get("/:hash", (req, res) => {
  const hash = req.params.hash;
  ShortUrl.find({ short_url: hash })
    .exec()
    .then(data => {
      if (data && data.length) {
        const { original_url } = data[0];
        res.redirect(original_url);
      } else {
        res.json("Invalid URL");
      }
    })
    .catch(err => res.json("Error: " + err));
});

router.post("/new", (req, res) => {
  const url = req.body.url;
  const isValidUrl = util.isValidUrl(url);
  if (isValidUrl) {
    const hash = util.generateHashCode(url);
    const newShortUrl = new ShortUrl({ original_url: url, short_url: hash });
    newShortUrl
      .save()
      .then(data => {
        console.log(data);
        res.json({ original_url: url, short_url: hash });
      })
      .catch(err => res.status(400).json("Error: " + err));
  } else {
    res.json({ error: "invalid URL" });
  }
});

module.exports = router;
