const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://webchatdev1.fjnx.com.cn/pwxweb',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        }
    }))
}
