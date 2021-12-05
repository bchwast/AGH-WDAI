let clicks = 0;
let enable = document.getElementById("enable");
let btn = document.getElementById("btn");
let disable = document.getElementById("disable")
let counter = document.getElementById("counter");

function clickButton() {
    clicks++;
    counter.innerText = clicks;
}

enable.addEventListener("click", () => {
    btn.addEventListener("click", clickButton)
})

disable.addEventListener("click", () => {
    btn.removeEventListener("click", clickButton);
    clicks = 0;
    counter.innerText = clicks;
})
