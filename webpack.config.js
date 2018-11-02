const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode:'development',
    devServer: {
        port: 2222,
        open: true
    },
    module: {
        rules: [
            {
                // babel loader 
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                } 

            },
            {
                // css loader 
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader',]
            },
            {
                test: /\.htm$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}