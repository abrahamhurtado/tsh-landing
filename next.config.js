const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  webpack(config, { dev, isServer, defaultLoaders }) {
    defaultLoaders.babel.options.plugins.push(["inline-react-svg"]);
    return config;
  }
});
