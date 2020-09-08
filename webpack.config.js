const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new WebpackPwaManifestPlugin({
            name: 'Petgram | For animal lovers!',
            shortname: 'Petgram 🐱',
            description:
                'Petgram is a place to explore amazing photos and share that what makes your pet special. And yes, there are a lot of kitten photos here too!',
            background_color: '#fff',
            theme_color: '#b1a',
            icons: [
                {
                    src: path.resolve('src', 'assets', 'icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    purpose: 'any maskable',
                },
                {
                    src: path.resolve('src', 'assets', 'apple-touch-icon.png'),
                    sizes: [96, 128, 192],
                    ios: true,
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
};
