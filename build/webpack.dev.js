const { merge } = require("webpack-merge");
const baseBuildConf = require("./webpack.base");
const path = require("path");
const { Configuration } = require("webpack");

/**
 * @type {Configuration}
 */
module.exports = (args, { mode }) => {
    return merge(baseBuildConf(mode), {
        devtool: "source-map",
        devServer: {
            overlay: {
                warnings: true,
                errors: true
            }, // 出现编译错误， 浏览器全屏覆盖
            compress: true,
            open: true,
            hot: true,
            port: 8888
        },
        plugins: []
    });
} 