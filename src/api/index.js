import axios from 'axios'


var instance = axios.create({
    timeout : 1000 * 10,  //设置请求超时时间
    baseURL : 'http://129.211.77.253:8000'
})

// 设置post请求头配置
instance.defaults.headers.post['Content-Type'] = 'application/json';

//请求拦截器
instance.interceptors.request.use(config => {return config},
    error => {
        return Promise.error(error)    
})

//响应拦截器
instance.interceptors.response.use(response => {
    // 如果返回的状态码为200 说明接口请求成功
     //否则错误
    if (response.status === 200) {
      return Promise.resolve(response.data)    
    } else {
      return Promise.reject(response.data)
    }},    
    // 根据后台返回的状态码 进行操作 如登录过去，错误提示    
    // 例如下面几个    
    error => {
        if (error.response) {
            switch (error.response.status) {
                // 未登录
                // 未登录则跳转登录页面 携带当前页面的路径 
               // 在登录成功后返回当前页面，在登录页面操作
                case 401:
                    // 可封装成 login()

                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和vuex中token对象
                //跳转登录页面
                case 403:
                    break;
                // 404 请求不存在
                case 404:
                  
                    // Toast({
                    //     message: '网络请求不存在',
                    //     duration: 1000,
                    //     forbidClick: true
                    // })
                    break;
                // 其他错误
                default:
                   
                    // Toast({
                    //     message:,
                    //     duration: 1500,
                    //     forbidClick: true
                    // })
            }
            return Promise.reject(error)
        }else{
            // 处理断网的情况
            // 请求超时 或者断网的情况 更新state的network状态
            // network 状态在app.vue 中控制全局的断网提示组件的显示隐藏 
           if (!window.navigator.onLine) {
               console.log('no network')
            }else{
                return Promise.reject(error)
            }
        }
    })

export default instance