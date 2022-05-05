
function initStudents(){
  axios({
    url:'/student/list',
    method:'get',
  }).then(({data:res})=>{
    //成功回调
    if(res.code == 0) {
      // console.log(res)
      document.querySelector('tbody').innerHTML = res.data.map(item=>`
      <tr>
      <th scope="row">${item.id}</th>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.sex}</td>
      <td>${item.group}</td>
      <td>${item.phone}</td>
      <td>${item.salary}</td>
      <td>${item.truesalary}</td>
      <td>${item.province + item.city +item.county}</td>
      <td>
        <button type="button" data-id=${item.id} class="update btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#updateModal">修改</button>
        <button type="button" data-id=${item.id} class="delete btn btn-danger btn-sm">删除</button>
      </td>
    </tr>
      `).join('')
    }
    
  })
}
initStudents()

document.querySelector('tbody').addEventListener('click',function(e){
  if(!e.target.classList.contains('delete')) return
  if(!confirm('是否确定删除？')) return
  let id = e.target.getAttribute("data-id")
  // alert(id)
  axios({
    url:'/student/delete',
    method:'delete',
    params: { id}
  }).then(({data:res})=>{
    //成功回调
    // console.log(res)
    if(res.code == 0) {
      toastr.success('恭喜您，删除学生信息成功！')
      initStudents()
    }
  })
})
function setCity(id) {
    let select1 = document.querySelector(`#${id} [name=province]`)
    axios({
      url:'/geo/province',
      method:'get',
    }).then(({data:res})=>{
      //成功回调
      // console.log(res)
      let arr = ['<option value="">--省--</option> ']
      res.forEach(item=>{
        arr.push(`<option value="${item}">${item}</option>`)
      })
      select1.innerHTML = arr.join("")
    })

    // 市
    let select2 = document.querySelector(`#${id} [name=city]`)
    select1.addEventListener('change',function(){
      select3.innerHTML = '<option value="">--区--</option> '
      if (this.value == '') {
        select2.innerHTML = '<option value="">--市--</option> '
        return
      }
      axios({
      method:'get',
      url:'/geo/city',
      params: {
        pname : select1.value
      }
      }).then(({data : res})=>{
      // console.log(res)
      let arr = ['<option value="">--市--</option> ']
      res.forEach(item => {
        arr.push(`<option value="${item}">${item}</option>`)
      })
      select2.innerHTML = arr.join('')
      })
    })

     // 区
     let select3 = document.querySelector(`#${id} [name=county]`)
     select2.addEventListener('change',function(){
       if(this.value == '') {
         select3.innerHTML = '<option value="">--区--</option> '
         return
       }
       axios({
       method:'get',
       url:'/geo/county',
       params: {
         pname : select1.value,
         cname : select2.value
         
       }
       }).then(({data : res})=>{
       // console.log(res)
       let arr = ['<option value="">--区--</option> ']
       res.forEach(item => {
         arr.push(`<option value="${item}">${item}</option>`)
       })
       select3.innerHTML = arr.join('')
       })
     })
}
setCity ('addModal')
setCity ('updateModal')

//添加
const form1 = document.querySelector('#addModal form')
form1.addEventListener('submit',function(e){
  e.preventDefault ()
  axios({
  method:'post',
  url:'/student/add',
  data: $(this).serialize()
  }).then(({data : res})=>{
  console.log(res)
  if(res.code == 0) {
    toastr.success('成了')
    document.querySelector('#addModal .btn-close').click()
    initStudents ()
    form1.reset()
  }
  })
})




     // 修改
     
     let formAdd = document.querySelector('#addModal form')
     formAdd.onsubmit = function (e) {
       e.preventDefault()
       axios({
         url:'/student/add',
         method:'post',
         data: $(this).serialize(),
       }).then(({data:res})=>{
         //成功回调
         // console.log(res)
         if(res.code == 0) {
           toastr.success('添加用户成功')
           document.querySelector('#addModal btn-close').click()
           initStudent()
         }
       })
     }
     document.querySelector('tbody').onclick = function (e) {
       if(!e.target.classList.contains('update')) return
       let id = e.target.getAttribute('data-id')
       // alert(id)
       axios({
         url:'/student/one',
         method:'get',
         params: {id}
       }).then(({data:res})=>{
         //成功回调
         // console.log(res)
         if(res.code == 0) {
           document.querySelector('#updateModal [name=name]').value = res.data.name
           document.querySelector('#updateModal [name=age]').value = res.data.age
           document.querySelector('#updateModal [name=phone]').value = res.data.phone
           document.querySelector('#updateModal [name=salary]').value = res.data.salary
           document.querySelector('#updateModal [name=truesalary]').value = res.data.truesalary
     
     
           let inps = document.querySelectorAll('#updateModal [name=sex]')
           inps.forEach(ele=>ele.checked = ele.value == res.data.sex)
     
           document.querySelector('#updateModal [name=province]').value = res.data.province
           document.querySelector('#updateModal [name=group]').value = res.data.group
     
           document.querySelector('#updateModal [name=city]').innerHTML = `<option value="${res.data.province}">--${res.data.province}--</option>`
           document.querySelector('#updateModal [name=county]').innerHTML = `<option value="${res.data.county}">--${res.data.county}--</option>`
     
           document.querySelector('#updateModal [name=id]').value = res.data.id
           
           let formUpdate = document.querySelector('#updateModal form')
           formUpdate.onsubmit = function (e){
             e.preventDefault()
             axios({
               url:'/student/update',
               method:'put',
               data: $(this).serialize(),
             }).then(({data:res})=>{
               //成功回调
               // console.log(res)
               if(res.code == 0) {
                 toastr.success('修改学生信息成功')
                 initStudents()
                 document.querySelector('#updateModal .btn-close').click()
               }
             })
           }
         }
       })
     }
     