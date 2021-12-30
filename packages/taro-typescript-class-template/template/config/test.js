module.exports = {
  env: {
    NODE_ENV: '"sit"',
  },
  defineConstants: {
    OSS_URL: JSON.stringify(''),
    BUSINESS_URL: JSON.stringify(''),
    GATEWAY: JSON.stringify('')
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);
    },
  },
  h5: {},
};
