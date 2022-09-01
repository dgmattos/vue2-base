const {PATHS} = require('./commun.config.js');
const { VueLoaderPlugin } = require('vue-loader');


const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    {
                      loader: 'vue-style-loader',
                    },
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                            sourceMap:true
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
    ]
}


module.exports = {devConfig};
