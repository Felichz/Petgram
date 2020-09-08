const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = (env, { mode }) => {
    const isDev = mode === 'development';

    return {
        output: {
            filename: 'app.bundle.js',
            publicPath: '/',
        },
        optimization: !isDev && {
            minimizer: [new TerserPlugin()],
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
                        src: path.resolve('src/assets/icon.png'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        purpose: 'any maskable',
                    },
                    {
                        src: path.resolve('src/assets/apple-touch-icon.png'),
                        sizes: [120, 152, 167, 180, 192],
                        ios: true,
                    },
                ],
            }),
            new WorkboxWebpackPlugin.GenerateSW({
                runtimeCaching: [
                    {
                        urlPattern: new RegExp(
                            'https://(res.cloudinary.com|images.unsplash.com)'
                        ),
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images',
                        },
                    },
                    {
                        urlPattern: new RegExp(
                            'https://petgram-server-hmcpzh3ov.vercel.app/'
                        ),
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'api',
                        },
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
};
