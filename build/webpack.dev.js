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
        overlay: {
            warnings: true,
            errors: true
        }, // 出现编译错误， 浏览器全屏覆盖
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