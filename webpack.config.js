var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    context: __dirname + '/app',
    entry: {
        javascript: './index.jsx'
    },
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })],
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                exclude: /node_modules/,
                loaders : ['react-hot-loader','babel-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?name=app/fonts/[name].[ext]'
            },
            {
                test: /\.yml$/,
                loader: "file-loader?name=assets/i18n/[path][name].json&context=./assets/i18n/!yaml",
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;
