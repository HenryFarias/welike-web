const path = require('path');

module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        inline: true, // autorefresh
        host: '0.0.0.0',
        port: 80
    },
    module: {
        rules: [{
            test: /\.js$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react'], // use es2015 and react
                    plugins: ['transform-class-properties']
                }
            }]
        }]
    },
};