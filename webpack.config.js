const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    // entry: {
    //     index: './src/index.js',
    //     print: './src/print.js',
    // },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    // plugins: [
    //     new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management',
    //     }),
    // ],
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets')
                }
            ]
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             use: ['style-loader', 'css-loader'],
    //         },
    //     ],
    // },
}
