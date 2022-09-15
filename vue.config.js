const { defineConfig } = require("@vue/cli-service");
const path = require("path");

process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_DESCRIPTION = require("./package.json").description;

module.exports = defineConfig({
  lintOnSave: true,
  devServer: {
    port: 8080,
  },
  chainWebpack: (config) => {
    // alias
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));

    // use @vue/compat
    config.resolve.alias.set("vue", "@vue/compat");
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        };
      });

    // process.env
    if (process.env.NODE_ENV == "production") {
      VUE_APP_TITLE = require("./package.json").name;
      // } else {
    }
  },

  // output
  outputDir: path.resolve(
    __dirname,
    process.env.NODE_ENV === "production" ? "dist/" : "/"
  ),
  productionSourceMap: false,
});
