var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {




    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'index.js')],




    output: {
        path: path.resolve(__dirname, './public/__build__'),
        filename: 'bundle.js'
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

        new webpack.HotModuleReplacementPlugin()
    ]
};
