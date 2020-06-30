const TerserPlugin = require("terser-webpack-plugin");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const nodeExternals = require("webpack-node-externals");
const env = process.env;
const isServer = env.RUN_ENV === "server";

// 拼接路径
const resolve = (dir) => require("path").join(__dirname, dir);

// 基础路径 注意发布之前要先修改这里
const publicPath = "/";

// proxy http
// const http = "10.198.3.28:30108";

module.exports = {
  publicPath,
  // devServer: {
  //   proxy: {
  //     "/": {
  //       target: `http://${http}`,
  //       changeOrigin: true,
  //       ws: false,
  //     },
  //   },
  // },
  outputDir: `dist/${env.RUN_ENV}`,
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      scss: {
        prependData: `@import '@/assets/styles/common/var.scss';`,
      },
    },
  },
  configureWebpack: {
    // 将 entry 指向应用程序的 server / client 文件
    entry: `./src/entry/${env.RUN_ENV}.ts`,
    devtool: "eval",
    // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
    // 并且还会在编译 Vue 组件时，
    // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
    target: isServer ? "node" : "web",
    // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
    output: {
      libraryTarget: isServer ? "commonjs2" : undefined,
    },
    // https://webpack.js.org/configuration/externals/#function
    // https://github.com/liady/webpack-node-externals
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，
    // 并生成较小的 bundle 文件。
    externals: isServer
      ? nodeExternals({
          // 不要外置化 webpack 需要处理的依赖模块。
          // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
          // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
          whitelist: /\.css$/,
        })
      : undefined,
    optimization: { splitChunks: isServer ? false : undefined },
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 服务端默认文件名为 `vue-ssr-server-bundle.json`
    // 客户端默认文件名为 `vue-ssr-client-manifest.json`
    plugins: [isServer ? new VueSSRServerPlugin() : new VueSSRClientPlugin()],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
    config
      // 开发环境
      .when(
        process.env.NODE_ENV === "development",
        // sourcemap不包含列信息
        (config) => config.devtool("cheap-source-map")
      );
  },
};

// 增加环境变量
const exec = require("child_process").execSync;

process.env.VUE_APP_NAME = require("./package.json").name;
process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_BUILD_TIME = require("dayjs")().format("YYYY-M-D HH:mm:ss");
process.env.VUE_APP_GIT_COMMIT = exec("git rev-parse HEAD")
  .toString()
  .trim();
