var webpack = require('webpack');
var prdConfig = require( './webpack.config.js' );
prdConfig.plugins.push(new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify('production')
    }
}));
prdConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
module.exports = prdConfig;
