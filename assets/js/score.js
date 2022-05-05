// 渲染成绩
const initScore = _ => {
    axios({
        method: 'get',
        url: '/score/list',
    }).then(({ data: res }) => {
        // console.log(res)
        if (res.code == 0) {
            let arr = []
            for (let k in res.data) {
                arr.push(`
                <tr>
                    <th scope="row">${k}</th>
                    <td>${res.data[k].name}</td>
                    <td data-id = "${k}" index = "1" class="score">${res.data[k].score[0]}</td>
                    <td data-id = "${k}" index = "2" class="score">${res.data[k].score[1]}</td>
                    <td data-id = "${k}" index = "3" class="score">${res.data[k].score[2]}</td>
                    <td data-id = "${k}" index = "4" class="score">${res.data[k].score[3]}</td>
                    <td data-id = "${k}" index = "5" class="score">${res.data[k].score[4]}</td>
                </tr>
                `)
                tbody.innerHTML = arr.join('')
            }
        }
    })
}
let tbody = document.querySelector('tbody')
initScore()

//制作input
tbody.addEventListener('click', function (e) {
    if (!e.target.classList.contains('score')) return
    if (!/^\d{1,3}$/.test(e.target.innerHTML) && e.target.innerHTML != '') return
    let num = e.target.innerHTML
    let input = document.createElement('input')
    input.value = num
    e.target.innerHTML = ''
    e.target.appendChild(input)
    input.focus()
    // 失去焦点
    input.addEventListener('blur', function () {
        e.target.innerHTML = num
    })

    //回车提交
    input.addEventListener('keyup' , function (ev) {
        if (ev.key != 'Enter') return
        console.log(this.parentNode.getAttribute('index'));
        console.log(this.parentNode.getAttribute('data-id'));
        console.log(this);
        axios({
            method: 'POST',
            url: '/score/entry',
            data: {
                "stu_id":this.parentNode.getAttribute('data-id'),
                "batch": this.parentNode.getAttribute('index'),
                "score": this.value
            }
        }).then(({ data: res }) => {
            console.log(res.data)
            if (res.code == 0) {
                toastr.success('成功')
                initScore()
            }
        })
    })
})