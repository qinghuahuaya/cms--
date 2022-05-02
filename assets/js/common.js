axios.defaults.baseURL = 'http://www.itcbc.com:8000'





// 设置响应拦截器 拦截器响应后判断响应状态码
// 添加请求拦截器
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
 