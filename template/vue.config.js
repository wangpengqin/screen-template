const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  // 生产环境项目默认部署在相对目录下，开发环境项目默认部署在根目录下。
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
   /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
   // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
   outputDir: "dist",
   // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
   assetsDir: "assets",
   // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
   // indexPath: "myIndex.html",
   // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
   filenameHashing: false,
  // eslint-disable-next-line
  configureWebpack: config => {
    return {
      optimization: {
        minimizer: [
          new TerserPlugin({
            cache: true, // 开启 cache，加快二次构建速度
            parallel: true, // 开启多线程压缩打包
            terserOptions: {
              output: {
                comments: false, // 打包时删除注释
              },
              compress: {
                drop_console: true, // 生产环境禁止打印console.log()
                dead_code: true, // 删除无法访问的代码
                drop_debugger: true, // 删除debugger
              },
            },
          }),
        ],
      },
    };
  },
  devServer: {
    // host: 'localhost',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: {
    //   "/test": {
    //     target: "",
    //     ws: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/test": "",
    //     },
    //   },
    // },
  },
};
