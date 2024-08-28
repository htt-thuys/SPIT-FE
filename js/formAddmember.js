//Bật qua site là hiện lên modal
let modal = new bootstrap.Modal(document.getElementById('modal'));
document.addEventListener('DOMContentLoaded', function () {
    let date = '01/01/2024 (mm/dd/yyyy)'
    let openDay = Date.parse(date)
    let dateCurrent = new Date()
    dateCurrent = Date.parse(dateCurrent)

    let des = document.getElementById('description')
    let btn1 = document.getElementById('callback_footer')
    let btn2 = document.getElementById('callback_header')

    if (openDay > dateCurrent) {
        des.innerText = `Thời Gian Mở Form Đăng Kí: ${date}\n`
            + "Chưa đến thời gian đăng kí, chuyển hướng đến trang chủ !!"
        btn1.innerHTML = "Đi"


        btn1.addEventListener('click', function () {
            window.location.href = '/index.html'
        })

        btn2.addEventListener('click', function () {
            window.location.href = '/index.html'
        })

    }

    modal.show();
});

document.getElementById('submitBtn').addEventListener('click', function (event) {

    var form = document.getElementById('form');
    var isValid = form.checkValidity();

    document.getElementById('modalLabel').innerText = "Thông Báo !"


    if (isValid) {
        document.getElementById('description').innerText = 'Bạn đã đăng kí thành công, vui lòng đợi mail phản hồi !!';
    } else {
        document.getElementById('description').innerText = 'Dữ liệu bạn nhập có vấn đề vui lòng thử lại';
    }

    var modal = new bootstrap.Modal(document.getElementById('modal'));

    modal.show();

});

let date = new Date()
let currentDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
document.getElementById('utc').innerHTML = `${currentDate}` 
