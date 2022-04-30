toastr.info('注册成功')
toastr.success('注册成功')
toastr.warning('注册成功')
toastr.error('注册成功')
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