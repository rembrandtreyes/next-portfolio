const path = require("path")

module.exports = {
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  webpack(config) {
    // allow imports in js to be root-relative, like "components/.."
    config.resolve.modules.push(path.resolve("./src/"))
    return config
  },
  env: {
    USER_ID: process.env.USER_ID,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
}
