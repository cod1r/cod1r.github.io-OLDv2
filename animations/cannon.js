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

var fire = false;
var seconds = 0;

function getAngle(){
    return Math.acos((PointBx-PointAx)/(Math.sqrt(Math.pow(PointBx-PointAx, 2)+Math.pow(PointBy-PointAy, 2))));
}
function calculateY(Yvel, seconds){
    return -1*((1/2)*((-9/8)/60)*Math.pow(seconds, 2)+Yvel*(seconds));
}
function calculateX(Xvel, seconds){
    return Xvel*seconds;
}


increase.onmousedown = () =>{   
    to = setInterval(up, ms);
}

window.onmouseup = () =>{
    clearInterval(to);
    clearInterval(de);
}

decrease.onmousedown = () =>{
    de = setInterval(down, ms);
}

window.addEventListener('keydown', event =>{
    if (event.keyCode === 37){
        up();
    }
    else if (event.keyCode === 39){
        down();
    }
    else if (event.keyCode === 32){
        fire = true;
    }
}
); 

function up(){
    if (!fire){
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
}
function down(){
    if (!fire){
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
}

// cannon 
var velocity = document.getElementById('vel').value;
ctx.font = '50px serif';
function tick(){
    velocity = document.getElementById('vel').value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText('The angle is: ' + Math.floor(getAngle()*(180/Math.PI)), 50, 90);
    ctx.fillText('The starting velocity is: ' + velocity, 50, 300);
    ctx.fillText('LinkedIn', 1300, 200);
    ctx.beginPath();
    ctx.arc(1390, 190, 100, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillText('Github', 1300, 500);
    ctx.beginPath();
    ctx.arc(1370, 490, 100, 0, 2*Math.PI);
    ctx.stroke();
    if (fire){
        seconds++;
        ctx.beginPath();
        Xvel = velocity*Math.cos(getAngle());
        Yvel = velocity*Math.sin(getAngle()) - (9.8/60)*seconds;
        var X = calculateX(Xvel, seconds);
        var Y = calculateY(Yvel, seconds);
        if ( X+250 < canvas.width && Y+775 < canvas.height && Y+775 > 0 && X+250 > 0){
            ctx.arc(X+250, Y+775, 10, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
            if (X+250 >= 1390-100 && X+250 <= 1390+100 && Y+775 >= 190-100 && Y+775 <= 190+100){
                window.open('https://www.linkedin.com/in/jason-ho-uh',' _blank');
            }
            if (X+250 >= 1370-100 && X+250 <= 1370+100 && Y+775 >= 490-100 && Y+775 <= 490+100){
                window.open('https://www.github.com/cod1r', '_blank');
            }
        }
        else {
            seconds = 0;
            fire = false;
        }
    }
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