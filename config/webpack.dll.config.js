const Webpack = require('webpack')
const fs = require('fs-extra');
const paths = require('./paths');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function generator(name, arr, needDepend){
    !needDepend && fs.emptyDirSync(paths.vendorSrc);


    return {
        entry: {
            [name]: arr,
        },
        output: {
            filename: "[name].[hash].dll.js",
            path: paths.vendorSrc,
            libraryTarget: 'var',
            library: '_dll_[name]_[hash]'
        },
        // optimization: {
        //     splitChunks: {
        //         chunks: 'all',
        //         name: 'split'
        //     }
        // },
        plugins: [
            new Webpack.DllPlugin({
                path: paths.vendorSrc + '/[name].manifest.json',
                name: '_dll_[name]_[hash]'
            }),
            new HtmlWebpackPlugin({
                filename: paths.appHtml,
                template: needDepend ? paths.appHtml : paths.appHtmlTemplate,
                inject: true,
                minify: {
                    removeComments: false,
                    collapseWhitespace: false,
                    removeRedundantAttributes: false,
                    useShortDoctype: false,
                    removeEmptyAttributes: false,
                    removeStyleLinkTypeAttributes: false,
                    keepClosingSlash: false,
                    minifyJS: false,
                    minifyCSS: false,
                    minifyURLs: false,
                }
            }),
            needDepend && new Webpack.DllReferencePlugin({
                manifest: require(path.join(__dirname, '../public/vendor/react.manifest.json'))
            })
        ].filter(Boolean),

    }
}

module.exports = {
    generator
}
