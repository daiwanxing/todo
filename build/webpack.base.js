const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin  } = require("vue-loader");
const path = require("path");
const { Configuration } = require("webpack");


/**
 * @type {Configuration}
 */
module.exports = {
    entry: {
        app: path.join(__dirname, '..', 'src/main.js')
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: "[name].[contenthash:8].js",
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 20000,
            minChunks: 1
        }
    }
}