// toastr.info('注册成功')
// toastr.success('注册成功')
// toastr.warning('注册成功')
// toastr.error('注册成功')
// 1. 显示隐藏
// 获取属性
const a1 = document.querySelector('.register a')
const a2 = document.querySelector('.login a')
const register = document.querySelector('.register')
const login = document.querySelector('.login')
// 注册点击事件 让显示隐藏
a2.addEventListener('click',function(){
    login.style.display = 'none'
    register.style.display = 'block'
})
a1.addEventListener('click',function(){
    login.style.display = 'block'
    register.style.display = 'none'
})

// 2 : 用户名和密码校验
//         两类 :    a 非空判断  b 正则校验
//  a 非空   b 正则   c 封装
// 获取所有input标签
const input1 = document.querySelector('.register [name=username]')
const input2 = document.querySelector('.register [name=password]')
const input3 = document.querySelector('.login [name=username]')
const input4 = document.querySelector('.login [name=password]')
const verifyInput = (ele , txt1 , reg , txt2) => {
// 给注册中的input绑定校验事件
ele.addEventListener('input',function(){
    // 非空判断
    if (this.value == '') {
        // 让input后面的span显示并改变样式
        this.nextElementSibling.style.display = 'block'
        this.nextElementSibling.innerHTML = txt1
        return 
    }else {
        // 如果内容不为空 让span隐藏,并清空
        this.nextElementSibling.style.display = 'none'
        this.nextElementSibling.innerHTML = ''
    }
        // 正则判断
        if (!reg.test(this.value)) {
            // 让input后面的span显示并改变样式
            this.nextElementSibling.style.display = 'block'
            this.nextElementSibling.innerHTML = txt2
        }else {
            // 如果内容不为空 让span隐藏,并清空
            this.nextElementSibling.style.display = 'none'
            this.nextElementSibling.innerHTML = ''
        }
})
}
verifyInput (input1 , '用户名不能为空!' , /^\S{2,15}$/ , '用户名必须2~15之间')
verifyInput (input2 , '密码不能为空!' , /^\S{6,15}$/ , '用户名必须6~15之间')
verifyInput (input3 , '用户名不能为空!' , /^\S{2,15}$/ , '用户名必须2~15之间')
verifyInput (input4 , '密码不能为空!' , /^\S{6,15}$/ , '用户名必须6~15之间')

// 3. 注册功能
const form1 = document.querySelector('.register form')
 form1.addEventListener('submit' , function (e) {
     e.preventDefault ()
     axios({
     method:'post',
     url:'/api/register',
     data: {
         username : input1.value,
         password : input2.value
     }
     }).then(({data : res})=>{
     console.log(res)
    //  判断业务状态是否失败
    // if (res.code == 1 ) {
    //     return toastr.warning(res.message)
    // }
    if ( res.code == 0 ) {
        toastr.success('成功')
        form1.reset ()
        a1.click ()
    }
     })
 })


 // 4. 登录功能
 const form2 = document.querySelector('.login form')
 form2.addEventListener('submit',function(e){
     e.preventDefault ()
     axios({
     method:'post',
     url:'/api/login',
     data: {
         username:input3.value,
         password:input4.value
        }
     }).then(({data : res})=>{
     console.log(res)
    //  if (res.code == 1 ) {
    //      return toastr.warning(res.message)
    //  }
     if (res.code == 0 ) {
        toastr.success('成功')
        location.href = './index.html'
        localStorage.setItem('token',res.token)
     }
     })
 })