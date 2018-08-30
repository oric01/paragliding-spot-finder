const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./client/src/index.js",
    output: {
        path: __dirname + '/client/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'client/dist'),
        compress: false,
        port: 9000
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: 'client/src/index.html'
        })
    ]
}
