const express = require("express");
const router = express.Router();
const util = require("../../utils/Util");

router.get("/:hash", (req, res) => {
  const hash = req.params.hash;
  if (shortUrls[hash]) {
    res.redirect(shortUrls[hash]);
  } else {
    res.json({ msg: "Invalid short url" });
  }
});

router.post("/new", (req, res) => {
  const url = req.body.url;
  const isValidUrl = util.isValidUrl(url);
  if (isValidUrl) {
    res.json({ original_url: url, short_url: generateShortUrl(url) });
  } else {
    res.json({ error: "invalid URL" });
  }
});

const shortUrls = {};

const generateShortUrl = url => {
  const hash = util.generateHashCode(url);
  if (shortUrls[hash]) {
    return hash;
  } else {
    shortUrls[hash] = url;
  }
  return hash;
};

module.exports = router;
