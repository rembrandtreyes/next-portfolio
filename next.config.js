const path = require("path")

module.exports = {
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  webpack(config) {
    // allow imports in js to be root-relative, like "components/.."
    config.resolve.modules.push(path.resolve("./src/"))
    return config
  },
}
