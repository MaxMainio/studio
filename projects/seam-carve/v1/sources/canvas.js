// var canvas = document.querySelector('canvas');

// window.onload = setCanvasSize();
// window.addEventListener('resize', e => {
//     setCanvasSize();
// })

// function setCanvasSize(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }

// var c = canvas.getContext('2d');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 788;
canvas.height = 599;

const image1 = new Image();
image1.src = '../01 In/The-Persistence-of-Memory-salvador-deli-painting.jpg';
ctx.drawImage(image1,0,0);
image1.addEventListener('load', function(){
    ctx.drawImage(image1, 0, 0, image1.width, image1.height);
});