let Mock = require('mockjs')
let arr = ['2', '1', '2']
Mock.mock(/\/api\/bb/, 'get', (options) => {
    // console.log(options)  // url: 路径， type: 请求方法，body: 参数
    return {
        status: 200,
        message:'success',
        data:arr
    }
})