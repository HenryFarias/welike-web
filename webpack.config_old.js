var config = {
    entry: './main.js', // entry point
    output: {
        filename: 'index.js', // place where bundled app will be served
    },
    devServer: {
        inline: true, // autorefresh
        host: '0.0.0.0',
        port: 80
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // search for js files 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            }
        ]
    }
}

module.exports = config;