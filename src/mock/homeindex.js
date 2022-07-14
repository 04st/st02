let Mock = require("mockjs")
import dayjs from 'dayjs'
// /aaa 拦截
let arr = [
    {
        date: "2016-05-02",
        name: "王虎",
        address: "上海市普陀区金沙江路 1518 弄",
    },
    {
        date: "2016-05-04",
        name: "小虎",
        address: "上海市普陀区金沙江路 1517 弄",
    },
    {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
    },
    {
        date: "2016-05-03",
        name: "虎",
        address: "上海市普陀区金沙江路 1516 弄",
    },
]
//请求
Mock.mock(/\api\/all/, "get", (options) => {
    // console.log(options);
    return {
        status: 200,
        message: "success",
        tabledata: arr
    }
})
//增加数据
Mock.mock("/api/add", "post", (options) => {
    // 参数 put与post类似
    // console.log('10', options);
    let body = JSON.parse(options.body)
    let { date, name, address } = body
    this.form.data = dayjs(body.date).format("YYYY-MM-DD")
    arr.pusth({ date, name, address })
    return {
        status: 200,
        messagw: "success",
        data: arr
    }
})
//删除数据
Mock.mock(/\/api\/delete\?id=\d/, "delete", (options) => {
    let id = options.url.split('=')[1]
    arr.splice(id*1,1)
    return {
        status: 200,
        messagw: "删除成功",
        data: arr
    }
})
//修改数据
Mock.mock("/api/update", "put", (options) => {
    // 参数 put与post类似
    // console.log('10', options);
    let body = JSON.parse(options.body)
    let { date, name, address, index } = body
    arr[index].date = date
    arr[index].name = name
    arr[index].address = address
    return {
        status: 200,
        messagw: "success",
        data: arr
    }
})