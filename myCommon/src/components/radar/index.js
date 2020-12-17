var CFG = {
    perDeg: 1,
};

var can = null
var ctx = null
var deg = 0;


export function init(can) {
    can = can;
    ctx = can.getContext('2d');
    ctx.strokeStyle = 'rgba(0,255,0,1)';
    ctx.fillStyle = 'rgba(0,50,0,1)';
    ctx.arc(150, 150, 150, 0, 2 * Math.PI);
    ctx.fill();
    var raf = window.requestAnimationFrame(loop);
}

function loop() {
    deg = (deg + CFG.perDeg);
    cover();
    drawPosLine();
    drawRadar(deg);
    raf = window.requestAnimationFrame(loop);
}

function cover() {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.02)';
    ctx.arc(150, 150, 150, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}

function drawPosLine() {
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 300);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.closePath();
    ctx.stroke();

    ctx.moveTo(150, 150);
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0 * Math.PI, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.moveTo(150, 150);
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0 * Math.PI, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
}

function drawRadar(iDeg) {
    ctx.fillStyle = 'rgba(0,200,0,.7)';
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, (-2 * CFG.perDeg + iDeg) / 180 * Math.PI, (0 + iDeg) / 180 * Math.PI);
    ctx.closePath();
    ctx.fill();
}