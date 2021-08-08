const { merge } = require("webpack-merge");
const baseBuildConf = require("./webpack.base");
const path = require("path");
const { Configuration } = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {Configuration}
 */
module.exports = merge(baseBuildConf, {
    devtool: "cheap-module-source-map",
    devServer: {
        compress: true,
        open: true,
        port: 8888
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, '..', 'index.html')
        })
    ]
});