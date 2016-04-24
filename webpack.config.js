module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devServer: {
        port: 9000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=1024'
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                plugins: [
                    "babel-plugin-add-module-exports",
                    "babel-plugin-transform-decorators-legacy"
                ].map(require.resolve),
                presets: [
                    "babel-preset-es2015",
                    "babel-preset-stage-0",
                    "babel-preset-react"
                ].map(require.resolve)
            }
        }]
    }
};