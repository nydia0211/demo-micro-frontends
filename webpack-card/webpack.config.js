
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'card',
            filename: 'remoteEntry.js',
            exposes: {
                './Card': './src/components/card.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}