const { merge } = require('webpack-merge');
const {commonConfig} = require('./commun.config.js');
const {prodConfig} = require('./prod.config.js');
const {devConfig} = require('./dev.config.js');


module.exports = (env) => {
    //console.log('commonConfig',commonConfig);
    //console.log('prodConfig',prodConfig);
    //console.log('devConfig',devConfig);

    if(env.production){
        return merge(commonConfig,prodConfig);
    }

    return merge(commonConfig,devConfig);
};
