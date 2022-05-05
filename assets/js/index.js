/**
 * 侧边导航关闭折叠控制
 */

function toggleSlide() {
  $('.nav > li > a').on('click', function () {
    let childMenu = $(this).next('ul');
    childMenu.slideToggle(400);
    let icon = childMenu.prev().find('.toggle');
    if (icon.hasClass('open')) {
      icon.removeClass('open').addClass('close');
    } else {
      icon.removeClass('close').addClass('open');
    }
  })

  // 默认第一个菜单展开
  $('.nav > li > a').eq(0).trigger('click');

  // 所有子菜单切换时加背景色
  $('.nav ul a').on('click', function () {
    $(this).addClass('active')
    $('.nav ul a').not($(this)).removeClass('active');
  })

}

toggleSlide();

// 2. 退出按钮
document.querySelector('.logout').addEventListener('click',function(){
  if (confirm('退吗')) {
    location.href = './login.html'
    localStorage.removeItem('token')
  }
})


// 3. 初始化
document.querySelector('.init').addEventListener('click',function(){
  axios({
  method:'get',
  url:'/init/data',
  // headers : {
  //   Authorization : localStorage.getItem('token')
  // }
  }).then(({data : res})=>{
  // console.log(res)
  if (res.code == 0) {
    toastr.success(res.message)
  }
  })
})