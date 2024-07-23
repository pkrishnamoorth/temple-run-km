const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');

let playerLeft = 50;
let playerBottom = 20;

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowUp' && playerBottom < 380) {
        playerBottom += 20;
    } else if (event.code === 'ArrowDown' && playerBottom > 0) {
        playerBottom -= 20;
    } else if (event.code === 'ArrowLeft' && playerLeft > 0) {
        playerLeft -= 20;
    } else if (event.code === 'ArrowRight' && playerLeft < 550) {
        playerLeft += 20;
    }
    player.style.bottom = playerBottom + 'px';
    player.style.left = playerLeft + 'px';
});

function moveObstacle() {
    let obstacleRight = parseInt(obstacle.style.right) || 0;
    obstacleRight += 10;
    if (obstacleRight > 600) {
        obstacleRight = 0;
    }
    obstacle.style.right = obstacleRight + 'px';
}

setInterval(moveObstacle, 100);