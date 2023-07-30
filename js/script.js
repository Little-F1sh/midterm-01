const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    searchForm.classList.toggle('active')
}

const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('#login-btn');

loginBtn.onclick = function() {
    loginForm.classList.toggle('active')
}

const cartBox = document.querySelector('.cart-box');
const cartBtn = document.querySelector('#cart-btn');

cartBtn.onclick = function() {
    cartBox.classList.toggle('active')
}