const { merge  } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Configuration } = require("webpack");
const baseBuildConf = require("./webpack.base");

/**
 * @type {Configuration}
 */
module.exports = merge(baseBuildConf, {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
});