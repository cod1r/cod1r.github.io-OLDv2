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
var PointAx = 50, 
    PointAy = 25, 
    PointBx = 250, 
    PointBy = -75, 
    PointCx = 10,
    PointCy = -55,
    PointDx = 210,
    PointDy = -155;

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

    var temp3 = PointBx;
    PointBx = PointBx*Math.cos(radians)+PointBy*Math.sin(radians);
    PointBy = PointBy*Math.cos(radians)-temp3*Math.sin(radians);

    var temp4 = PointDx;
    PointDx = PointDx*Math.cos(radians)+PointDy*Math.sin(radians);
    PointDy = PointDy*Math.cos(radians)-temp4*Math.sin(radians);
}
function down(){
    var temp = PointAx;
    PointAx = PointAx*Math.cos(-radians)+PointAy*Math.sin(-radians);
    PointAy = PointAy*Math.cos(-radians)-temp*Math.sin(-radians);

    var temp2 = PointCx;
    PointCx = PointCx*Math.cos(-radians)+PointCy*Math.sin(-radians);
    PointCy = PointCy*Math.cos(-radians)-temp2*Math.sin(-radians);

    var temp3 = PointBx;
    PointBx = PointBx*Math.cos(-radians)+PointBy*Math.sin(-radians);
    PointBy = PointBy*Math.cos(-radians)-temp3*Math.sin(-radians);

    var temp4 = PointDx;
    PointDx = PointDx*Math.cos(-radians)+PointDy*Math.sin(-radians);
    PointDy = PointDy*Math.cos(-radians)-temp4*Math.sin(-radians);
}

// cannon 
var distance = 12;

function tick(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(PointAx+250, PointAy+775);
    ctx.lineTo(PointBx+250, PointBy+775);
    ctx.moveTo(PointCx+250, PointCy+775);
    ctx.lineTo(PointDx+250, PointDy+775);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(250, 775, Math.sqrt(100+55*55), 0, 2*Math.PI);
    ctx.stroke();
    requestAnimationFrame(tick);
}
tick();