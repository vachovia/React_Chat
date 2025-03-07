const jsonTryParse = function (jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
};

const userStatus = (user) => {
  return user.status === 'online' ? 'online' : 'offline';
}

export { jsonTryParse, userStatus };