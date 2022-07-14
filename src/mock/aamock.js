// 模拟接口
let Mock = require('mockjs')
//  /aa拦截
let arr = ['zhangsan', 'lisi', 'wangwu']
//  /api/aa
// 解决请求url?的问题，使用正则  /\/api\/aa/
Mock.mock(/\/api\/aa/, 'post', (options) => {
    // console.log(options)  // url: 路径， type: 请求方法，body: 参数
    return {
        status: 200,
        message:'success',
        data:arr
    }
})