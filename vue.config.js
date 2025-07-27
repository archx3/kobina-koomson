// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()

    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  },
  configureWebpack: {
    resolve: {
      alias: {
        'markdown-it': require.resolve('markdown-it/lib/index.js'), // force CommonJS version
      },
    },
  },
}
