const TerserPlugin = require('terser-webpack-plugin');

// 拼接路径
const resolve = (dir) => require('path').join(__dirname, dir);

// 基础路径 注意发布之前要先修改这里
const publicPath = '/';

// proxy http
const http = '10.198.3.28:30108';

module.exports = {
  publicPath,
  devServer: {
    proxy: {
      '/': {
        target: `http://${http}`,
        changeOrigin: true,
        ws: false,
      },
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      scss: {
        prependData: `@import '@/assets/styles/common/var.scss';`,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
    config
      // 开发环境
      .when(
        process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        (config) => config.devtool('cheap-source-map')
      )
      // 非开发环境
      .when(process.env.NODE_ENV !== 'development', (config) => {
        config.optimization.minimizer([
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
              compress: {
                dropConsole: true,
              },
            },
          }),
        ]);
      });
  },
};

// 增加环境变量
const exec = require('child_process').execSync;

process.env.VUE_APP_NAME = require('./package.json').name;
process.env.VUE_APP_VERSION = require('./package.json').version;
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss');
// process.env.VUE_APP_GIT_COMMIT = exec('git rev-parse HEAD').toString().trim();
