const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const { VuetifyProgressiveModule } = require('vuetify-loader');
module.exports = {
  transpileDependencies: ["vuetify"],

  chainWebpack: (config) => {

    plugins: [
      new GoogleFontsPlugin({
        fonts: [{ family: "Monoton" }],
      }),
    ];
  },
};
