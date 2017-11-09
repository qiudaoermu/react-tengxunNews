var path = require('path');
var webpack = require('webpack');


    HtmlWebpackPlugin = require('html-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var publicPath = 'http://localhost:3000/';
module.exports = {




    entry: {
        page1: ['./index.js', hotMiddlewareScript],
        page2: ['./detial.js', hotMiddlewareScript]
    },


    output: {
        path: path.resolve(__dirname, './public/__build__'),
        filename: './[name]/bundle.js',
        publicPath: publicPath

    },
    devServer: {
        inline: true,
        port: 8099
    },
    devtool: 'source-map',
    module: {
        loaders: [
         {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }

        },
        {
            test: /\.css$/,
            loader: 'style!css',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),


        new webpack.NoEmitOnErrorsPlugin()
    ]
};
