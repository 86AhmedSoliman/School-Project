// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

// module.exports= {
    // entry: './src/index.js',
    // output: {
    //     path: path.join(__dirname, "./dist"),
    //     publicPath: '/',
    //     filename: "index.js"
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.html$/,
    //             use: [
    //                 {
    //                     loader: 'html-loader',
    //                 },
    //             ],
    //         },
    //         {
    //             test: require.resolve("jquery"),
    //             loader: "expose-loader",
    //             options: {
    //                 exposes: ["$", "jQuery"],
    //             },
    //         },
    //         {
    //             test: /\.(sass|css|scss)$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader,
    //                 'css-loader',
    //                 'sass-loader',
    //             ],
    //         },
    //         {
    //             test: /\.(png|svg|jpe?g|gif)$/,
    //             exclude: /fonts/, 
    //             use: [
    //                 {
    //                 loader: 'file-loader',
    //                 options: {
    //                     name: '[name].[ext]',
    //                     outputPath: "images",
    //                     },
    //                 },
    //             ],
    //         },
    //         {
    //             test: /\.(svg|eot|woff|woff2|ttf)$/,
    //             exclude: /images/,
    //             use: [
    //                 {
    //                 loader: 'file-loader',
    //                 options: {
    //                     name: '[name].[ext]',
    //                     outputPath: "fonts",
    //                     },
    //                 },
    //             ],
    //         },
    //     ]
    // },
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, 'dist'),
    //     },
    //     port: 8081,
    //     open: true,
    //     devMiddleware: {
    //         writeToDisk: true,
    //         stats:'errors-only',
    //     },
    // },
    // plugins: [
    //     new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    //     new CssMinimizerWebpackPlugin({}),
    //     new MiniCssExtractPlugin(),
    //     new HtmlWebPackPlugin({
    //         filename: 'index.html',
    //         template: './src/index.html',
    //         inject: 'body'
    //     }),
    //     new HtmlWebPackPlugin({
    //         filename: 'student1.html',
    //         template: './src/student1.html',
    //         inject: 'body'
    //     }),
    //     new HtmlWebPackPlugin({
    //         filename: 'student2.html',
    //         template: './src/student2.html',
    //         inject: 'body'
    //     }),
    // ]
// }