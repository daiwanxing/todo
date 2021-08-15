const { merge  } = require("webpack-merge");
const { Configuration } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseBuildConf = require("./webpack.base");

/**
 * @type {Configuration}
 */
const mergeConfig = (args, { mode }) => {
    return merge(baseBuildConf(mode), {
        plugins: [
            new MiniCssExtractPlugin()
        ]
    });
}


module.exports = mergeConfig;