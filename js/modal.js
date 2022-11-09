var main_btn = document.querySelectorAll('.tab-item .tab-content-right .main_btn');
var wrapper = document.querySelectorAll('.tab-item .tab-content-right .wrapper');
var close_btns = document.querySelectorAll('button.close_btn');

main_btn.forEach((e, i) => {
  e.addEventListener('click', () => {
    wrapper[i].classList.add('active');
  });
});

close_btns.forEach((e, i) => {
  e.addEventListener('click', () => {
    wrapper[i].classList.remove('active');
  });
});
