const webpack = require('webpack')
const { generator } = require('../config/webpack.dll.config')


// const compilerAntd = webpack(reactConfig);

new Promise((resolve, reject) => {
    const reactConfig = generator('react',['react', 'react-dom'], false)
    const compilerReact = webpack(reactConfig);
    compilerReact.run((err, stats) => {
        if(err){
            console.log(err)
        }
        resolve(stats)
    })
}).then((stats) => {
    const antdConfig = generator('antdVendor', [
        'antd/es/button',
        'antd/es/modal',
        'antd/es/page-header',
    ], true)
    const compilerAntd = webpack(antdConfig);
    compilerAntd.run((err, stats) => {
        if(err){
            console.log(err)
        }
    })
})


