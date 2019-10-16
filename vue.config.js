module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
    devServer: {
        // 设置代理
        proxy: {
          "/api": {
            target: "http://47.106.248.143/supermall", // 访问数据的计算机域名
            changOrigin: true, //开启代理
            pathRewrite:{
                '^/api':'/' //这个很重要
            }
          }
        }
      }
}