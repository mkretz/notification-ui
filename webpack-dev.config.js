var devConfig = require( './webpack.config.js' );
devConfig.devServer.proxy['/config/conf.json'].target = 'http://localhost:8080/assets/conf/dev/conf.json';
module.exports = devConfig;
