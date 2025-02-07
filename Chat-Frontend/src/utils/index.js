const jsonTryParse = function (jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
};

export { jsonTryParse };