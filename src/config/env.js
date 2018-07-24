/*
* baseUrl: 域名地址
* routerMode: 路由模式
* imgBaseUrl: 图片所在域名地址
*/

var baseUrl = ''
var routerMode = 'hash'
var imgBaseUrl = ''

if (process.env.NODE_ENV === 'development') {
  imgBaseUrl = '/img/'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
  imgBaseUrl = ''
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
