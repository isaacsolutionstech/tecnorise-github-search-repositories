const fs = require("fs");
const path = require("path");

function createAliases(baseDir) {
  const srcPath = path.resolve(__dirname, baseDir);

  return fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .reduce((aliases, dirent) => {
      aliases[`@/${dirent.name}`] = path.resolve(srcPath, dirent.name);
      return aliases;
    }, {});
}

module.exports = {
  webpack: {
    alias: createAliases("src"),
  },
  typescript: {
    enableTypeChecking: true,
  },
};
