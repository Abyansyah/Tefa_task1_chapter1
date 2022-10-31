var main_btn = document.querySelector('.tab-item .tab-content-right .main_btn');
var wrapper = document.querySelector('.tab-item .tab-content-right .wrapper');
var close_btns = document.querySelectorAll('.tab-item .close_btn');

main_btn.addEventListener('click', function () {
  wrapper.classList.add('active');
});

close_btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    wrapper.classList.remove('active');
  });
});