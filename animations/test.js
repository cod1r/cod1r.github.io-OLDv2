var cv = document.getElementById('cv');
cv.height = window.innerHeight;
cv.width = window.innerWidth;
cv.style.position = 'absolute';
cv.style.left = '0';
cv.style.top = '0';
var cvs = cv.getContext('2d');
var size = 20;
var square = {
    x: null, 
    y: null, 
    strength: 0,
}
var grid = [];
var actual_grid = [];
for (let y = 0; y < window.innerHeight/size; y ++){
    var temp = [];
    for (let x = 0; x < window.innerWidth/size; x ++){
        var obj = Object.assign({}, square);
        obj.x = x*size;
        obj.y = y*size;
        grid.push(obj);
        cvs.strokeRect(x*size, y*size, size, size);
        temp.push(0);
    }
    actual_grid.push(temp);
}
cvs.fillStyle = 'red';
window.addEventListener('click', (event) => {
    grid.map(x => { 
        if (event.x > x.x && event.x < x.x+size && event.y > x.y && event.y < x.y+size){
            x.strength = 4;
            x.source = true;
            cvs.fillRect(x.x+2, x.y+2, size-4, size-4);
            actual_grid[x.y/size][x.x/size] = 1;
        }
    }
    );
})

function tick(){
    cvs.clearRect(0, 0, cv.width, cv.height);
    for (let y = 0; y < window.innerHeight/size; y++){
        for (let x = 0; x < window.innerWidth; x++){
            cvs.strokeRect(x*size, y*size, size, size);
        }
    }
    // setInterval(tick, 3000);
    requestAnimationFrame(tick);
}

// tick();