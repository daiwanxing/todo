const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin  } = require("vue-loader");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
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
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: "MicroHard Todo",
            template: path.join(__dirname, '..', 'index.html')
        })
    ],
    target: "web",
    resolve: {
        alias: {
            vue: process.env.NODE_ENV == 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
            '@': path.join(__dirname, '..', 'src')
        }
    },
    optimization: {
        // chunk 分割
        splitChunks: {
            chunks: "async", // all async all 是将所有的chunk都单独打包
            minSize: 20000,
            minChunks: 1
        }
    }
}