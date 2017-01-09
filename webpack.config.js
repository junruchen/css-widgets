var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./build",
        publicPath: "./build/",
        filename: "build.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.styl$/, loader: "style!css!stylus"},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                },
                plugins: ['transform-runtime']
            },
            {test: /\.html$/, loader: "html"},
            {test: /\.vue$/, loader: 'vue'},
            {test: /.(png)|(jpg)$/, loader: 'url?limit=50000'}
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        //plugins: ['transform-runtime']
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        extensions: ['', '.js', '.json', '.vue']
    },
    plugins: [
        //提取文件的公共部分
        new webpack.optimize.CommonsChunkPlugin('commons', 'common.js'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devtool: "source-map",
    contentBase: '/'
}
