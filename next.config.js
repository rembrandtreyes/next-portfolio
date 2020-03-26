const path = require("path")
const withCSS = require("@zeit/next-css")

module.exports = withCSS({
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  webpack(config) {
    // allow imports in js to be root-relative, like "components/.."
    config.resolve.modules.push(path.resolve("./src/"))
    return config
  },
})
