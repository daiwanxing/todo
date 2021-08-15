const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EslintPlugin = require("eslint-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { Configuration } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {Configuration}
 */
module.exports = mode => {
    return {
        entry: {
            app: path.join(__dirname, '..', 'src/main.js')
        },
        output: {
            path: path.join(__dirname, '..', 'dist'),
            filename: "[name].[contenthash:8].js",
            chunkFilename: '[name].js',
            assetModuleFilename: 'assets/[hash][ext][query]'
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
                        mode === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        mode === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                        'css-loader',
                        'sass-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    include: /src/,
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.(svg|jpg|png|jpeg|gif)$/,
                    parser: {
                        dataUrlCondition: {
                            maxSize: 1024 * 4
                        }
                    },
                    type: "asset" // 自动在resource 和 Inline之间进行选择，如果小于4kb，生成 data URI,否则打包成一个文件
                }
            ]
        },
        plugins: [
            new EslintPlugin(),
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
        },
        // ignoreWarnings: [
        //     {
        //         message: /Can't import the named export/
        //     }
        // ]
    }
}