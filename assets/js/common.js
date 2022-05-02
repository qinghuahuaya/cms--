axios.defaults.baseURL = 'http://www.itcbc.com:8000'

// 设置所有请求方式的请求头 , 设置token认证
// axios.defaults.headers['Authorization'] = localStorage.getItem('token')

// 强制体验请求拦截器 设置token认证 (设置除了注册和登录以为的请求)
axios.interceptors.request.use(function(config){
    if (config.url.indexOf('/api') == -1) {
        config.headers['Authorization'] = localStorage.getItem('token')
    }
    return config
},function(error) {
return Promise.reject(error)
})



// 设置响应拦截器 拦截器响应后判断响应状态码
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
// 在发送请求之前做些什么
if (response.data.code == 1) {
    toastr.warning(response.data.message)
}
return response;
 }, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
 });
 


//  失效的token ,要求跳转到登录页面
axios.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
    if (response.data.code == 1) {
        toastr.warning(response.data.message)
    }
    return response;
     }, function (error) {
    // 对请求错误做些什么
    // console.dir(error);
    if (error.response.data.message == "身份认证失败") {
        location.href = './login.html'
        localStorage.removeItem('token')
    }
     });