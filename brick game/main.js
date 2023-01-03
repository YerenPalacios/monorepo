let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let status = 'playing'

const Ball = {
    x: 200,
    y: 350,
    xDir: 0,
    yDir: 1,
    radius: 10,
    step: 2
}

let paddleX = 300;
let paddleY = canvas.height - 20;
let paddleWidth = 100;

function drawBall() {
    ctx.beginPath();
    ctx.arc(Ball.x, Ball.y, Ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

function moveBall() {
    if (Ball.x < canvas.width - Ball.radius && Ball.xDir === 1)
        Ball.x = Ball.x + Ball.step;
    if (Ball.x > 0 - Ball.radius && Ball.xDir === 0) Ball.x = Ball.x - Ball.step;

    if (Ball.y > 0 + Ball.radius && Ball.yDir === 1) Ball.y = Ball.y - Ball.step;
    if (Ball.y < canvas.height - Ball.radius && Ball.yDir === 0)
        Ball.y = Ball.y + Ball.step;

    //bounce
    if (Ball.x == 0 + Ball.radius) Ball.xDir = 1;
    if (Ball.x == canvas.width - Ball.radius) Ball.xDir = 0;

    if (Ball.y == 0 + Ball.radius) Ball.yDir = 0;
    if (Ball.y == canvas.height - Ball.radius) status = 'paused'

    //bounce paddle
    if (
        Ball.y == paddleY - Ball.radius && (Ball.x < paddleX - Ball.radius - paddleWidth && Ball.x > paddleX + paddleWidth + Ball.radius * 2)
    )
        Ball.yDir = 1;
}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
};

function drawPaddle() {
    ctx.beginPath();
    ctx.roundRect(paddleX, paddleY, paddleWidth, 10, 10);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function drawBrick(x, y, active, id){
    if (!active) return
    let brickWidth = 90
    let brickHeight = 25
    ctx.beginPath();
    ctx.rect(x, y, brickWidth, brickHeight);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    if (Ball.x >= x - Ball.radius && Ball.x <= x + brickWidth + Ball.radius && Ball.y <= brickHeight + Ball.radius) {
        bricPositions[id][2] = false // brick showing   
    }
    if (bricPositions[id][2]){
        if ( Ball.x <= x + brickWidth + Ball.radius  && Ball.y <= brickHeight + Ball.radius){
            console.log(id, ' active?')
            Ball.yDir = 0
        }
        
    }
    

    // if (Ball.x >= x - Ball.radius && Ball.x <= x + brickWidth)
}

let bricPositions = [[0,0,true],[100,0,true],[200,0,true],[300,0,true]]

function drawBricks() {  
    bricPositions.forEach((i, k)=>{
        drawBrick(i[0], i[1], i[2], k)
    })
}

function checkBrickNum(){
    if (bricPositions.every(b=>b[2] === false))
        status = 'paused'
        
}

function run() {
    moveBall();
    drawBall();
    drawBricks();
    drawPaddle();
    checkBrickNum()
}

setInterval(() => {
    if (status === 'paused') return
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    run();
}, 10);


canvas.onclick = e => {
    if (status === 'paused') {
        Ball.x = 200;
        Ball.y = 350;
        paddleX = 300;
        status = 'playing'
        Ball.yDir = 1
    }

}

canvas.onmousemove = e => {
    if (!e.buttons) return
    if (e.clientX > 0 + paddleWidth / 2 && e.clientX < canvas.width - paddleWidth / 2)
        paddleX = e.clientX - paddleWidth / 2
}