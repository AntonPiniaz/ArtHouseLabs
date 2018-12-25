// header menu
$('.menu-btn').click(function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.header-nav').toggleClass('header-nav_active');
});

//anchors scroll
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

//form validation

let name = document.getElementById('name');
let mail = document.getElementById('email');
let text = document.getElementById('text');
let btn = document.getElementById('button');

name.addEventListener('keyup', function () {
    let val = /\d|\W/.test(this.value);
    cauntion(this, val);
});

mail.addEventListener('keyup', function () {
    let val = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(this.value);
    cauntion(this, !val);
});

text.addEventListener('keyup', function () {
    let val = /<\w*>/.test(this.value);
    cauntion(this, val);
});

function cauntion(elem, val) {
    if (val){
        btn.disabled = true;
        elem.style.border = '1px solid #ff0000';
        elem.nextElementSibling.style.display = 'block';
    } else {
        btn.disabled = false;
        elem.style.border = '1px solid transparent';
        elem.nextElementSibling.style.display = 'none';
    }
    if(elem.value === ''){
        elem.style.border = '1px solid transparent';
        elem.nextElementSibling.style.display = 'none';
    }
}