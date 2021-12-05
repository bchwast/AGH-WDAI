let score = 6;
let lives = 3;

async function stop(game, score) {
    let zombies = document.getElementsByClassName("zombie");
    for (let zombie of zombies) {
        zombie.style.display = "none";
    }
    clearInterval(game);

    const response1 = await fetch("https://jsonblob.com/api/jsonBlob/914883905509933056");
    let scores = toArray(await response1.json());
    scores.push([document.getElementById("nick").value, score, new Date().toLocaleDateString()]);
    scores.sort((a, b) => {
        return b[1] - a[1];
    })
    scores = scores.slice(0, 7);

    const response2 = await fetch("https://jsonblob.com/api/jsonBlob/914883905509933056", {
        method: "PUT",
        body: JSON.stringify(toJson(scores)),
        headers: {
            "Content-Type": "application/json",
            "Location": "https://jsonblob.com/api/jsonBlob/914883905509933056",
            "Transfer-Encoding": "chunked"
        }
    });

    let board = document.getElementById("board");
    let final = document.createElement("div");
    final.className = "black";
    final.innerText = "You scored: " + score + " points";
    board.removeEventListener("click", shoot);
    board.style.cursor = "default";

    let scoreboard = document.createElement("div");
    let again = document.createElement("input");
    let fake = document.createElement("form");
    again.type = "submit";
    again.id = "again";
    again.value = "Play again"
    scoreboard.id = "scoreboard"
    for (let i in scores) {
        let entry = document.createElement("div");
        entry.className = "entry";
        let nr = document.createElement("p");
        let nick = document.createElement("p");
        let val = document.createElement("p");
        let date = document.createElement("p");
        nr.innerText = (parseInt(i, 10) + 1).toString() + ".";
        nick.innerText = scores[i][0];
        val.innerText = scores[i][1];
        date.innerText = scores[i][2];

        entry.appendChild(nr);
        entry.appendChild(nick);
        entry.appendChild(val);
        entry.appendChild(date);
        scoreboard.appendChild(entry);
    }
    final.appendChild(scoreboard);
    fake.appendChild(again);
    final.appendChild(fake);
    board.appendChild(final);
}

function shoot(event) {
    let scoreDisplay = document.getElementById("score");
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
}

function run() {
    let board = document.getElementById("board");
    let scoreDisplay = document.getElementById("score");
    board.style.cursor = "url(\"./images/viewfinder.png\"), pointer";
    board.addEventListener("click", shoot)

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

        let minSpeed = 1;
        let maxSpeed = 10;
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
}

function toArray(scores) {
    let array = [];
    for (let i in scores) {
        array.push([scores[i]["nick"], parseInt(scores[i]["score"], 10), scores[i]["date"]]);
    }
    return array;
}

function toJson(scores) {
    let json = [];
    for (let i in scores) {
        let entry = {
            "nick": scores[i][0],
            "score": scores[i][1].toString(),
            "date": scores[i][2]
        };
        json.push(entry);
    }
    return json;
}

function site() {
    let board = document.getElementById("board");
    let start = document.createElement("div");
    let input = document.createElement("input");
    let inputL = document.createElement("label");
    let submit = document.createElement("p");
    input.type = "text";
    input.id = "nick";
    inputL.htmlFor = "nick";
    start.className = "black";
    start.innerText = "Enter your nickname";
    submit.id = "submit";
    submit.innerText = "Play!";
    start.appendChild(inputL);
    start.appendChild(input);
    start.appendChild(submit);
    board.appendChild(start);

    submit.addEventListener("click", () => {
        if (document.getElementById("nick").value !== "") {
            start.style.display = "none";
            run();
        }
    })
}

site();