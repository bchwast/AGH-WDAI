function stop(game, score) {
    clearInterval(game);
    let board = document.getElementById("board");
    let final = document.createElement("div");
    final.id = "final";
    final.innerText = "You scored: " + score + " points";
    board.appendChild(final);
}

let board = document.getElementById("board");
let scoreDisplay = document.getElementById("score");
let score = 0;
let lives = 3;

let game = setInterval(() => {
    let zombie = document.createElement("div");
    zombie.className = "zombie";

    let minHeight = 1;
    let maxHeight = 30;
    let bottom = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    zombie.style.bottom = bottom + "%";
    zombie.style.zIndex = Math.floor(Math.random() * 1000);

    let size = 0.5 + Math.random() * 1.2;
    zombie.style.transform = "scale(" + size + ")";

    let minSpeed = 3;
    let maxSpeed = 15;
    let speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1) + minSpeed);
    zombie.style.animation = "walk " + speed + "s 0s 1 linear, move 0.5s 0s infinite steps(9)";

    board.appendChild(zombie);

    zombie.addEventListener("animationend", (event) => {
        if (event.animationName === "walk") {
            if (lives > 0) {
                lives--;
            }
            if (lives <= 0) {
                stop(game, score);
            }
        }

        scoreDisplay.innerText = score;
    })
}, 700);

board.addEventListener("click", (event) => {
    if (lives > 0) {
        if (event.target.classList.contains("zombie")) {
            score += 12;
            event.target.remove();
        }
        else {
            score -= 6;
        }
        scoreDisplay.innerText = score;
    }
})