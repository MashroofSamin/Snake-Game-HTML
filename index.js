const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
const highScoreElement = document.querySelector('#highScore');
const scoreElement = document.querySelector('#score');
const restartButton = document.getElementById('restartButton');

const gameSpeed = 6000/60;
const gridSize = 17;
const cellSize = canvas.width / gridSize;
let score = 0;
let highScore = localStorage.getItem('highScore' || 0);
highScore = highScore ? parseInt (highScore): 0;
highScoreElement.textContent = 'High Score: ' + highScore;

const snake = [
    {x:8, y:1},
    {x:8, y:2},
    {x:8, y:3}
];


let newHead={x:8, y:4}
snake.push(newHead);
let direction = {x:0, y:-1};
let nextDirection = {x:0, y:1};
let apple = {x:8, y:14};
let gamePaused = false;

function drawFood(){
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x * cellSize, apple.y * cellSize, cellSize, cellSize);
}

function appleGenerate(){
    let appleOnSnake = true;

    while (appleOnSnake) {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);

        appleOnSnake = snake.some(segment => segment.x === x && segment.y === y);

        if (!appleOnSnake){
            apple = {x, y};
            drawFood();
        }
    }
}


function drawGrid(){
    for (let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
                if((i + j) % 2 === 0){
                    ctx.fillStyle = "#89Cff0";
                } else {
                    ctx.fillStyle = "#D1F6FF";
                }
            
            let x = j * cellSize;
            let y = i * cellSize;

            ctx.fillRect(x, y, cellSize, cellSize);
        }
    }
}

function drawSnake(){
    ctx.fillStyle = "#2234A8";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
    });
}

document.addEventListener("keydown", event => {
    switch (event.key){
        case "ArrowUp":
        case "w":
        case "W":
            if(direction.y !== 1) nextDirection = {x:0, y:-1};
            break;
        case "ArrowDown":
        case "s":
        case "S":
            if(direction.y !== -1) nextDirection = {x:0, y:1};
            break;
        case "ArrowLeft":
        case "a":
        case "A":
            if(direction.x !== 1) nextDirection = {x:-1, y:0};
            break;
        case "ArrowRight":
        case "d":
        case "D":
            if(direction.x !== -1) nextDirection = {x:1, y:-0};
            break;

    }
});



function freezeGame() {
    gamePaused = true;
}


    function snakeUpdate(){
        direction = nextDirection;
        for (let i = 0; i < snake.length -1; i++){
            snake[i] = {...snake[i + 1]};
        }
        const head = snake[snake.length - 1];
        const newHead = {
            x: head.x + direction.x,
            y: head.y + direction.y,   
        }
        if(newHead.x === apple.x && newHead.y === apple.y){
            snake.push({...head})
            appleGenerate();
            score++;
            scoreElement.textContent = 'Score: ' + score;
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('highScore', highScore);
                highScoreElement.textContent = 'High Score: ' + highScore;
            }
        }
        snake[snake.length - 1] = newHead;
    
        if(newHead.x < 0 || newHead.x > 16 || newHead.y < 0 || newHead.y > 16){
            freezeGame();
            return;
        }
        for (let i=0; i<=snake.length-2; i++){
            if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
                freezeGame();
                return;
        }
    }
}


function gameLoop(){
    if(gamePaused) return;

    drawGrid();
    snakeUpdate();
    drawSnake();
    drawFood();
}


restartButton.addEventListener('click', () => {
    location.reload();
});

setInterval(gameLoop, gameSpeed);