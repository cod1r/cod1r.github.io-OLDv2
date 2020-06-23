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
    var temp2 = PointCx;
    PointCx = PointCx*Math.cos(radians)+PointCy*Math.sin(radians);
    PointCy = PointCy*Math.cos(radians)-temp2*Math.sin(radians);
}
function down(){
    var temp = PointAx;
    PointAx = PointAx*Math.cos(-radians)+PointAy*Math.sin(-radians);
    PointAy = PointAy*Math.cos(-radians)-temp*Math.sin(-radians);
    var temp2 = PointCx;
    PointCx = PointCx*Math.cos(-radians)+PointCy*Math.sin(-radians);
    PointCy = PointCy*Math.cos(-radians)-temp2*Math.sin(-radians);
}

// cannon 
var distance = 12;

function tick(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo((PointAx)/15+250, (PointAy)/15+775);
    ctx.lineTo(PointBx, PointBy);
    ctx.moveTo((PointCx)/14+250, (PointCy)/14+775);
    ctx.lineTo(PointDx, PointDy);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(250, 775, Math.sqrt(100+55*55), 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, Math.sqrt(300*300+800*800), 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, Math.sqrt(100+55*55), 0, 2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(250, 775);
    ctx.lineTo(300, 800);
    ctx.stroke();
    requestAnimationFrame(tick);
}
tick();