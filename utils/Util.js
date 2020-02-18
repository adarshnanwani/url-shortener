module.exports.generateHashCode = str => {
  let buff = new Buffer(str);
  let base64data = buff.toString("base64");
  let hash = base64data.substr(0, 4) + base64data[8] + base64data[12];
  return hash;
};

const urlValidatorRegex = /http[s]?:[/]{2}[w]{3}.[a-zA-Z]{1,}.com([/][a-zA-Z0-9])*/;
module.exports.isValidUrl = url => {
  return urlValidatorRegex.test(url);
};
