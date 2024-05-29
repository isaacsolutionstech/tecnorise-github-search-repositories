const fs = require("fs");
const path = require("path");
const envs = require("dotenv").config();
const { DefinePlugin } = require("webpack");

class IgnoreWarningsPlugin {
  apply(compiler) {
    compiler.hooks.afterCompile.tap("IgnoreWarningsPlugin", (compilation) => {
      compilation.warnings = compilation.warnings.filter(
        (warning) =>
          !/Conflicting values for 'process.env'/.test(warning.message)
      );
    });
  }
}

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
    plugins: [
      new DefinePlugin({
        "process.env": JSON.stringify(envs.parsed || {}),
      }),
      new IgnoreWarningsPlugin(),
    ],
  },
  typescript: {
    enableTypeChecking: true,
  },
};
