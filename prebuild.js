// prebuild.js
const fs = require("fs");
const path = require("path");

const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

createDir(path.join(__dirname, "dist"));
createDir(path.join(__dirname, "dist", "img"));
