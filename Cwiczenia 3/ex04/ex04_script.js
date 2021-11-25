let clicks = 0;

function enableButton() {
    let button = document.getElementById("butt");
    button.disabled = false;
}

function disableButton() {
    let button = document.getElementById("butt");
    let counter = document.getElementById("counter");

    button.disabled = true;
    counter.innerHTML = "0";
    clicks = 0;
}

function clickButton() {
    let counter = document.getElementById("counter");

    clicks++;
    counter.innerHTML = clicks;
}