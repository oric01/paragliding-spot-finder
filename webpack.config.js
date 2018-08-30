const path = require('path');

module.exports = {
    mode: "development",
    entry: "./client/src/index.js",
    output: {
        filename: "dist/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }
        ]
    }
}
