var canvas = document.getElementById("gt-canvas");
var ctx = canvas.getContext("2d");

canvas.width = 1350;
canvas.height = 620;
ctx.fillStyle = 'orange'; //cor do preenchimento
ctx.fillRect(630, 300, 50, 10);

ctx.beginPath(); 
ctx.moveTo(630, 310); 
ctx.lineTo(145, 390); 
ctx.lineTo(145, 430); 
ctx.fill();

ctx.beginPath(); 
ctx.moveTo(680, 310); 
ctx.lineTo(1170, 390); 
ctx.lineTo(1170, 430); 
ctx.fill();

ctx.beginPath(); 
ctx.moveTo(655, 310); 
ctx.lineTo(630, 620); 
ctx.lineTo(680, 620); 
ctx.fill();

ctx.fillStyle = 'green';

ctx.beginPath(); 
ctx.moveTo(655, 310); 
ctx.lineTo(630, 620); 
ctx.lineTo(680, 620); 
ctx.fill();