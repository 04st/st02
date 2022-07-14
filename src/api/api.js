// 统一管理我的开发接口（api）
import axios from 'axios'
let instance = axios.create({
    baseURL: '/api', //基准地址
    timeout: 5000,
})
// 请求响应拦截
instance.interceptors.request.use((config) => {
    // console.log(config)
    // config.headers.token='wwwwwwww'
    return config
})
// 响应拦截
instance.interceptors.response.use(response => {
		// response 是否后台发回的响应数据
		return response
})
export default instance