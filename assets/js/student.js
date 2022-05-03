
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
        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#updateModal">修改</button>
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
      let arr = ['<option value="">--省--</option>  [name=province]']
      res.forEach(item=>{
        arr.push(`<option value="${item}">${item}</option>`)
      })
      select1.innerHTML = arr.join("")
    })
}
setCity ('addModal')
setCity ('updateModal')

