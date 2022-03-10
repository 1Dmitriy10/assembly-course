const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, `src`, `./js/index.js`),
    output: {
        filename: `[name].[contenthash].js`,
        path: path.resolve(__dirname, `dist`)
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                    {
                        loader: 'svgo-loader',

                    }
                ]
            },

            {
                test: /\.html$/i,
                loader: "html-loader",

            },

            {
                test: /\.png$/,
                use: [
                    `file-loader`,

                    {
                        loader: `image-webpack-loader`,
                        options: {
                            optipng: {
                                enabled: true,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    },

                ],
                include: path.resolve(__dirname, `assets`,)
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, `css-loader`]
            },
            {
                test: /\.s[ac]ss$/,
                use: [`css-loader`, `sass-loader`]
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, `src`, `index.html`)
        }),
        new MiniCssExtractPlugin({
            filename: `[name].[contenthash].css`
        }),



    ],
    stats: {
        children: true
    }

}