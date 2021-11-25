let values = 0;
let prop = false;

function clickOne() {
    values++;
    alert("nacisnąłeś niebieski o wartości 1");
}

function clickTwo(event) {
    if (values <= 20) {
        values = values + 2;
        alert("nacisnąłeś czerwony o wartości 2");
    }

    if (! prop) {
        event.stopPropagation();
    }
}

function clickThree(event) {
    values = values + 3;
    alert("nacisnąłeś żółty o wartości 3");

    if (! prop) {
        event.stopPropagation();
    }
}

function propagationSwitch() {
    let button = document.getElementById("switch");

    if (prop) {
        prop = false;
        button.innerHTML = "Start";
    }
    else {
        prop = true;
        button.innerHTML = "Stop";
    }
}

function resetCounter() {
    values = 0;
}