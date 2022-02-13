// const path = require("path")
// // const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const CompressionPlugin = require('compression-webpack-plugin')// 引入gzip压缩插件

// // const px2rem = require('postcss-px2rem')
// // const postcss = px2rem({
// //   remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
// // })

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// console.log('process.env.NODE_ENV =', process.env.NODE_ENV);
// // vue.config.js
// module.exports = {
//   publicPath: './',

//   // 将构建好的文件输出到哪里
//   outputDir: 'dist',

//   // 放置生成的静态资源(js、css、img、fonts)的目录。
//   assetsDir: 'static',

//   // 指定生成的 index.html 的输出路径
//   indexPath: 'index.html',

//   // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
//   runtimeCompiler: false,

//   // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
//   transpileDependencies: [
//     'vant',
//     'uplus'
    
//   ],

//   // 生产环境关闭 source map
//   productionSourceMap: true,

//   devServer: {
//     host: 'localhost',
//     port: 57103, // 端口号配置
//     open: true,
//     proxy: {
//       '/appApi': {
//         target: 'https://zjsj-test.haier.net/',//测试
//         // target: 'https://zjsj.haier.net/', //生产
//         // secure: false,
//         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
//         //ws: true, // proxy websockets
//         //pathRewrite方法重写url
//         // pathRewrite: {
//         //   //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
//         //   //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
//         // }
//       },
//       '/v4': {
//         target: 'https://m-test.ehaier.com/',//代理地址，这里设置的地址会代替axios中设置的baseURL
//         // secure: false,
//         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
//       },
//       '/oauthserver': {
//         target: 'https://zj-yanshou.haier.net',//代理地址，这里设置的地址会代替axios中设置的baseURL
//         // secure: false,
//         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
//       },
//       '/oauth': {
//         // https://taccount.haier.com  https://account-api.haier.net
//         target: 'https://testaccount.haier.com',//代理地址，这里设置的地址会代替axios中设置的baseURL
//         // secure: false,
//         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
//       },
//       '/v2': {
//         // https://taccount.haier.com  https://account-api.haier.net
//         target: 'https://testaccount.haier.com',//代理地址，这里设置的地址会代替axios中设置的baseURL
//         // secure: false,
//         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
//       },
//       '/api/file': {
//         target: 'https://zjhx-test.haier.net',//代理地址，这里设置的地址会代替axios中设置的baseURL
//         // secure: false,
//         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
//       },
//     }
//   },

//   // 处理打包时console.log 报错
//   lintOnSave: false,
//   // 调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === 'production') {

//       config.plugins.push(new CompressionPlugin({ // gzip压缩配置
//         test: /\.js$|\.html$|\.css/, // 匹配文件名
//         threshold: 10240, // 对超过10kb的数据进行压缩
//         deleteOriginalAssets: false // 是否删除原文件
//       }))
//     }
//   },
//   //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
//   chainWebpack: config => {
//     config.entry.app = ['babel-polyfill', './src/main.js'];

//     config.plugin('html').tap(args => {
//       args[0].title = "三翼鸟";
//       return args;
//     })
//     // 配置别名
//     config.resolve.alias
//       .set('@', resolve('src'))
//       .set('assets', resolve('src/assets'))
//       .set('components', resolve('src/components'))
//       .set('views', resolve('src/views'))

//     config.optimization.minimizer('terser').tap((args) => {
//       // 去除生产环境console
//       // args[0].terserOptions.compress.drop_console = true
//       return args
//     })
//   },
//   // css: {
//   //   loaderOptions: {
//   //     postcss: {
//   //       plugins: [
//   //         // postcss
//   //       ]
//   //     }
//   //   }
//   // }
// }
// vue.config.js
module.exports = {
  runtimeCompiler: true,
}