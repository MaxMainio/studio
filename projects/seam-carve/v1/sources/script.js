let img_input = document.getElementById('input_image');
let file_input = document.getElementById('file_input');

file_input.addEventListener('change', (e) => {
    img_input.src = URL.createObjectURL(e.target.files[0])
}, false);

// img_input.onload = function(){
//     let src = cv.imread('input_image');
//     let dst = new cv.Mat();
//     // You can try more different parameters
//     cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
//     cv.imshow('output', dst);
//     src.delete(); dst.delete();    
// }

// img_input.onload = function(){
//     let src = cv.imread('input_image');
//     let dst = new cv.Mat();
//     let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
//     let high = new cv.Mat(src.rows, src.cols, src.type(), [150, 150, 150, 255]);
//     // You can try more different parameters
//     cv.inRange(src, low, high, dst);
//     cv.imshow('output', dst);
//     src.delete(); dst.delete(); low.delete(); high.delete();
// }

img_input.onload = function(){
    let src = cv.imread('input_image');
    let dst = new cv.Mat();
    let M = cv.Mat.eye(3, 3, cv.CV_32FC1);
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.filter2D(src, dst, cv.CV_8U, M, anchor, 0, cv.BORDER_DEFAULT);
    cv.imshow('output', dst);
    src.delete(); dst.delete(); M.delete();
}