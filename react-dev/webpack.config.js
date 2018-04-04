var path = require('path');
var webpack = require('webpack');


    HtmlWebpackPlugin = require('html-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var publicPath = 'http://localhost:3000/';
module.exports = {




    entry: {
        main: ['./index.js']
    },


    output: {
        path: path.resolve(__dirname, './public/__build__'),
        filename: 'bundle.js',
        publicPath: "dist/"

    },
    devServer: {
      // contentBase: './static',
        contentBase: [path.join(__dirname, ".")], // 本地服务器 加载页面 所在的目录
        // port:7000,
        host: '127.0.0.1',
        port: 8099,
        //port: serverConfig.port,
        //host: serverConfig.host,
        hot: true // 服务器热加载
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
