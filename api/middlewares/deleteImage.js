const fs = require("fs");
const path = require("path");

const deleteImg = async (path) => {
  try {
    fs.unlinkSync(path);
  } catch (error) {}
};

module.exports = deleteImg;
