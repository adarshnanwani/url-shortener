module.exports.generateHashCode = str => {
  let buff = new Buffer(str);
  let base64data = buff.toString("base64");

  let hash = "";
  for (let i = 0; i < 6; i++) {
    hash =
      hash + base64data[Math.round(Math.random(base64data.length - 1) * 10)];
  }
  return hash;
};

const urlValidatorRegex = /http[s]?:[/]{2}[w]{3}.[a-zA-Z]{1,}.com([/][a-zA-Z0-9])*/;
module.exports.isValidUrl = url => {
  return urlValidatorRegex.test(url);
};
