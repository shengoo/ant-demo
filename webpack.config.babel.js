/**
 * Created by sheng on 2017/3/5.
 */

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import autoprefixer from 'autoprefixer';

const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';
import theme from './theme';
console.log(theme)
const themeJson = JSON.stringify(theme);

module.exports = function() {

    const config = {};

    config.entry = {
        app : './src/js/app'
    };

    config.output = {
        path: path.resolve(__dirname, 'dist'),
        // need [hash] to force load new file not cached file
        // when app not deployed in EikonAppServer
        filename: isProd ? '[name].[chunkhash:8].js' : '[name].bundle.js',
        // There are also additional JS chunk files if you use code splitting.
        chunkFilename: isProd ? '[name].[chunkhash:8].chunk.js' : '[name].chunk.js',
        publicPath: ''
    };

    if (isProd) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'cheap-module-source-map';//'eval-source-map';
    }

    config.module = {
        // makes missing exports an error instead of warning
        strictExportPresence: true,
        rules: [

            // First, run the linter.
            // It's important to do this before Babel processes the JS.
            // {
            //     test: /\.(js|jsx)$/,
            //     enforce: 'pre',
            //     use: 'eslint-loader',
            //     include: [
            //         path.resolve(__dirname, "src")
            //     ],
            // },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            // {
            //     test: /\.html$/, // handles html files. <link rel="import" href="path.html"> and import "path.html";
            //     loader: "wc-loader",
            //     include: [
            //         path.resolve(__dirname, 'bower_components')
            //     ]
            // },

            // The "file" loader handles all assets unless explicitly excluded.
            // The `exclude` list *must* be updated with every change to loader extensions.
            // When adding a new loader, you must add its `test`
            // as a new entry in the `exclude` list for "file" loader.

            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                    /\.less/
                ],
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',
                },
            },
            // "url" loader works like "file" loader except that it embeds assets
            // smaller than specified limit in bytes as data URLs to avoid requests.
            // A missing `test` is equivalent to a match.
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'assets/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname,'node_modules/antd'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader?{"relativeUrls":false}'
                })
            },
            // Modify ant-design theme
            {
                test: /\.less$/,
                include: [path.resolve(__dirname,'node_modules/antd')],
                // use: [{
                //     loader: "style-loader" // creates style nodes from JS strings
                // }, {
                //     loader: "css-loader" // translates CSS into CommonJS
                // }, {
                //     loader: `less-loader`,  // compiles Less to CSS
                //     options: {
                //         sourceMap: true,
                //         modifyVars:theme
                //     }
                // }]
                loader:ExtractTextPlugin.extract(
                    'css-loader!' +
                    // 'postcss-loader!' +
                    `less-loader?{"modifyVars":${JSON.stringify(theme)}}`
                )
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ],
            },
        ]
    };

    config.plugins = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('[name].bundle.css')
    ];

    if(isProd){
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    // Disabled because of an issue with Uglify breaking seemingly valid code:
                    // https://github.com/facebookincubator/create-react-app/issues/2376
                    // Pending further investigation:
                    // https://github.com/mishoo/UglifyJS2/issues/2011
                    comparisons: false,
                },
                output: {
                    comments: false,
                    // Turned on because emoji and regex is not minified properly using default
                    // https://github.com/facebookincubator/create-react-app/issues/2488
                    ascii_only: true,
                },
                sourceMap: true,
            }),
            new ManifestPlugin({
                fileName: 'asset-manifest.json',
            }),
            // new ExtractTextPlugin({
            //     filename: '[name].[contenthash:8].css',
            // }),
        )
    }

    config.devServer = {
        port: 3300,
        contentBase: path.join(__dirname, ''),
        open: true,
        openPage: '',
        historyApiFallback: true,
    };

    return config;

}();