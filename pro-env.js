
/**
 * 根据环境变量区分开发，测试，生产环境
 */
module.exports = function(){
    var baseUrl = '', staticUrl = '';
    switch (process.env.NODE_ENV) {
        case 'production':
            baseUrl = "https://www.devchan.top/api"
            staticUrl = "https://www.devchan.top"
            break;
        case 'test':
            baseUrl = "https://t.devchan.top/api"
            staticUrl = "https://t.devchan.top"
        default:
            baseUrl = "http://www.devchan.top/api"
            staticUrl = "http://www.devchan.top"
            break;
    }
    return {
        baseUrl: baseUrl,
        staticUrl: staticUrl
    }
}
