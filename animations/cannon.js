var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'absolute';
canvas.style.left= '0';
canvas.style.top = '0';
canvas.style.zIndex = '-1';
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');
var radians = Math.PI/180;
var ms = 20;
var to;
var de;
var PointAx = 300, 
    PointAy = 800, 
    PointBx = 500, 
    PointBy = 700, 
    PointCx = 260,
    PointCy = 720,
    PointDx = 460,
    PointDy = 620;

increase.onmousedown = () =>{   
    to = setInterval(up, ms);
}
// increase.onclick = () =>{
//     up();
// }
increase.onmouseup = () =>{
    clearInterval(to);
}
// decrease.onclick = () =>{
//     down();
// }
decrease.onmousedown = () =>{
    de = setInterval(down, ms);
}
decrease.onmouseup = () =>{
    clearInterval(de);
}
// window.onclick = () =>{
//     var first = PointAx*Math.cos(radians)+PointAy*Math.sin(radians);
//     var first2 = PointAy*Math.cos(radians)-PointAx*Math.sin(radians);
//     console.log([first, first2, first*Math.cos(radians)+first2*Math.sin(radians), first2*Math.cos(radians)-first*Math.sin(radians)]);
// }
window.addEventListener('keydown', event =>{
    if (event.keyCode === 37){
        up();
    }
    else if (event.keyCode === 39){
        down();
    }
}
); 

function up(){
    var temp = PointAx;
    PointAx = PointAx*Math.cos(radians)+PointAy*Math.sin(radians);
    PointAy = PointAy*Math.cos(radians)-temp*Math.sin(radians);
    // PointBx = PointBx*Math.floor(Math.cos(radians))+PointBy*Math.sin(radians);
    // PointBy = PointBy*Math.floor(Math.cos(radians))-PointBx*Math.sin(radians);
    var temp2 = PointCx;
    PointCx = PointCx*Math.cos(radians)+PointCy*Math.sin(radians);
    PointCy = PointCy*Math.cos(radians)-temp2*Math.sin(radians);
    // PointDx = PointDx*Math.floor(Math.cos(radians))+PointDy*Math.sin(radians);
    // PointDy = PointDy*Math.floor(Math.cos(radians))-PointDx*Math.sin(radians);
}
function down(){
    var temp = PointAx;
    PointAx = PointAx*Math.cos(-radians)+PointAy*Math.sin(-radians);
    PointAy = PointAy*Math.cos(-radians)-temp*Math.sin(-radians);
    // PointBx = PointBx*Math.cos(-radians)+PointBy*Math.sin(-radians);
    // PointBy = PointBy*Math.cos(-radians)-PointBx*Math.sin(-radians);
    var temp2 = PointCx;
    PointCx = PointCx*Math.cos(-radians)+PointCy*Math.sin(-radians);
    PointCy = PointCy*Math.cos(-radians)-temp2*Math.sin(-radians);
    // PointDx = PointDx*Math.cos(-radians)+PointDy*Math.sin(-radians);
    // PointDy = PointDy*Math.cos(-radians)-PointDx*Math.sin(-radians);
}

// cannon 


function tick(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(PointAx, PointAy);
    ctx.lineTo(PointBx, PointBy);
    ctx.moveTo(PointCx, PointCy);
    ctx.lineTo(PointDx, PointDy);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(250, 775, Math.sqrt(100+55*55), 0, 2*Math.PI);
    ctx.stroke();
    requestAnimationFrame(tick);
}
tick();