require('./style.scss');

var canvas = document.querySelector('canvas');
canvas.width = document.documentElement.clientWidth - 2;
canvas.height = document.documentElement.clientHeight - 2;

const c = canvas.getContext('2d');
c.fillRect(30,30,300,300);
