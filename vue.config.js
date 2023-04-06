const isProd = process.env.NODE_ENV === 'production'


const path = require("path")
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')// 引入gzip压缩插件

// const px2rem = require('postcss-px2rem')
// const postcss = px2rem({
//   remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
// })

function resolve(dir) {
  return path.join(__dirname, dir)
}

// console.log('__dirname：', __dirname)
// console.log('__filename：', __filename)
// console.log('process.cwd()：', process.cwd())
// console.log('./：', path.resolve('./'))

console.log('process.env.NODE_ENV =', process.env.NODE_ENV);
// vue.config.js
module.exports = {
  publicPath: './',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  // 放置生成的静态资源(js、css、img、fonts)的目录。
  assetsDir: 'static',

  // 指定生成的 index.html 的输出路径
  indexPath: 'index.html',

  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: true,

  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [
    'vant',
    'uplus'
    
  ],

  // 生产环境关闭 source map
  productionSourceMap: process.env.NODE_ENV !== 'production',

  devServer: {
    // host: 'localhost',
    port: 57103, // 端口号配置
    proxy: {// 配置代理（只在本地开发有效，上线无效）
      '/appApi': {
        target: 'https://zjsj-test.haier.net/',//测试
        // target: 'https://zjsj.haier.net/', //生产
        // secure: false,
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
        //ws: true, // proxy websockets
        //pathRewrite方法重写url
        // pathRewrite: {
        //   //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
        //   //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        // }
      },
    }
  },

  // 处理打包时console.log 报错
  lintOnSave: false,
  // 调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {

      config.plugins.push(
        new CompressionPlugin({ // gzip压缩配置
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 1024 * 100, // 对超过100kb的数据进行压缩
          minRatio: 0.8,
          deleteOriginalAssets: false // 是否删除原文件
        }),      // 压缩成 .br 文件，如果 zlib 报错无法解决，可以注释这段使用代码，一般本地没问题，需要注意线上服务器会可能发生找不到 zlib 的情况。
        // new CompressionPlugin({
        //   filename: '[path][base].br',
        //   algorithm: 'brotliCompress',
        //   test: /\.(js|css|html|svg)$/,
        //   compressionOptions: {
        //     params: {
        //       [zlib.constants.BROTLI_PARAM_QUALITY]: 11
        //     }
        //   },
        //   threshold: 10240,
        //   minRatio: 0.8
        // }),
      )
    }
  },
  //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js'];

    config.plugin('html').tap(args => {
      args[0].title = "测试项目";
      return args;
    })
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))

    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      // args[0].terserOptions.compress.drop_console = true
      return args
    })

    config.module
    .rule([
      {
        test: /.(jpg|png|gif)/,
        use: {
          loader: "url-loader",
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048 * 300,//小于300k 打包到 bundle.js; 
          }
        }
      }
    ])

  },
  //配置全局样式变量
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/css/mixin.scss";
          @import "@/assets/css/variable.scss";
          `
      }
    }
  },
}