const devConfig = require('./webpack.config.dev')
const prodConfig = require('./webpack.config.prod')
module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig
