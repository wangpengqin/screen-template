// generator.js 导出一个函数，这个函数接收三个参数

// 一个 GeneratorAPI 实例：自定义模版必然用到 GeneratorAPI 的 render() 方法
// 这个插件的 generator 选项，也就是用户对 prompts.js 中问题所提供的答案
// 整个 preset (presets.foo) 将会作为第三个参数传入。

module.exports = (api, options, rootOptions) => {
    api.extendPackage({
      // 命令
      scripts: {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build"
      },
      dependencies: {
        "core-js": "^3.6.4",
        "terser-webpack-plugin": "^2.3.5",
        "element-ui": "^2.15.13",
        "moment": "^2.29.4",
        "vue": "^2.6.11",
        "vue-router": "^3.1.5",
        "vuex": "^3.1.2",
      },
      devDependencies: {
        "@vue/cli-plugin-babel": "~5.0.0",
        "@vue/cli-plugin-router": "~5.0.0",
        "@vue/cli-plugin-vuex": "~5.0.0",
        "@vue/cli-service": "~5.0.0",
        "sass": "^1.32.7",
        "sass-loader": "^12.0.0",
        "vue-template-compiler": "^2.6.14"
      }
    });
    // 复制template模版
    api.render('../template');
  };