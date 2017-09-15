const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const precss       = require('precss');
const autoprefixer = require('autoprefixer');
const postassets = require('postcss-assets');
module.exports = {
    devtool : 'eval-source-map',
    entry : [
        'webpack-hot-middleware/client?reload=true',
         path.join(__dirname, 'src/client.js')
    ],
    output : {
        path : path.join(__dirname, 'dist'),
        filename : '[name].js',
        publicPath : '/',
        chunkFilename : '[name].[chunkhash:5].chunk.js'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : 'src/index.tpl.html',
            inject : 'body',
            filename : 'index.html',
            favicon: './src/icon.png'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer, postassets]
                }
            }
        })
    ],
    module : {
        loaders : [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query : {
                    "presets": ["react", "es2015", "stage-0"]
                }
            },
            {
                test:   /\.css$/,
                loader: "style-loader?sourceMap!css-loader?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader"
            }
        ]
    }
}