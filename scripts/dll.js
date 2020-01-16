const webpack = require('webpack')
const path = require('path')
const { generator } = require('../config/webpack.dll.config')
const fs = require('fs-extra');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const gzipSize = require('gzip-size').sync;
const filesize = require('filesize');




// const compilerAntd = webpack(reactConfig);

new Promise((resolve, reject) => {
    const reactConfig = generator('react',['react', 'react-dom'], false)
    const compilerReact = webpack(reactConfig);
    compilerReact.run((err, stats) => {
        if(err){
            console.log(err)
        }
        // printFileSizesAfterBuild(
        //     stats,
        //     // previousFileSizes,
        //     // paths.appBuild,
        //     // WARN_AFTER_BUNDLE_GZIP_SIZE,
        //     // WARN_AFTER_CHUNK_GZIP_SIZE
        // );
        // console.log(stats.compilation.assets);
        for(let key in stats.compilation.assets){
            console.log(key)
            let content = fs.readFileSync(path.resolve(__dirname, '../public/vendor/' + key))
            console.log(filesize(gzipSize(content)))
        }
        // stats.compilation.assets.map((item, index)  => {
        //     console.log(item)
        //     console.log(index)
        // })
        console.log("Times: " + (stats.endTime - stats.startTime));
        resolve(stats)
    })
})
    .then((stats) => {
    const antdConfig = generator('antdVendor', [
        'antd/es/button',
    ], true)
    const compilerAntd = webpack(antdConfig);
    compilerAntd.run((err, stats) => {
        if(err){
            console.log(err)
        }
        for(let key in stats.compilation.assets){
            console.log(key)
            let content = fs.readFileSync(path.resolve(__dirname, '../public/vendor/' + key))
            console.log(filesize(gzipSize(content)))
        }
        console.log("Times: " + (stats.endTime - stats.startTime));
        // printFileSizesAfterBuild(
        //     stats,
        //     // previousFileSizes,
        //     // paths.appBuild,
        //     // WARN_AFTER_BUNDLE_GZIP_SIZE,
        //     // WARN_AFTER_CHUNK_GZIP_SIZE
        // );
    })
})


