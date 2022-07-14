let Mock = require('mockjs');
Mock.mock('/api/log', 'post', config => {
    let  body  = JSON.parse(config.body)
    console.log(body)
    if (body.username == 'a' && body.password == 'a') {
        return {
            status: 200,
            message: 'success',
            data: { username: body.username, password: body.password, token: '1111wwwwwsssss' }
        }
    } else {
        return {
            status: 501,
            message: 'fall',
        }
    }

})