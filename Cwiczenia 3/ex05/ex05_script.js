let values = 0;
let prop = false;

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let propSwitch = document.getElementById("prop_switch");
let counter = document.getElementById("counter");
let reset = document.getElementById("reset");

function clickOne() {
    values++;
    counter.innerText = values;
    alert("nacisnąłeś niebieski o wartości 1");
    if (values > 30) {
        two.removeEventListener("click", clickTwo);
        two.style.backgroundColor = "darkgrey";
    }
    if (values > 50) {
        three.removeEventListener("click", clickThree);
        three.style.backgroundColor = "dimgrey";
    }
}

function clickTwo(event) {
    values += 2;
    counter.innerText = values;
    alert("nacisnąłeś czerwony o wartości 2");
    if (values > 30) {
        two.removeEventListener("click", clickTwo);
        two.style.backgroundColor = "darkgrey";
    }
    if (values > 50) {
        three.removeEventListener("click", clickThree);
        three.style.backgroundColor = "dimgrey";
    }
    if (! prop) {
        event.stopPropagation();
    }
}

function clickThree(event) {
    values += 5;
    counter.innerText = values;
    alert("nacisnąłeś żółty o wartości 5");
    if (values > 30) {
        two.removeEventListener("click", clickTwo);
        two.style.backgroundColor = "darkgrey";
    }
    if (values > 50) {
        three.removeEventListener("click", clickThree);
        three.style.backgroundColor = "dimgrey";
    }
    if (! prop) {
        event.stopPropagation();
    }
}

one.addEventListener("click", clickOne);

two.addEventListener("click", clickTwo);

three.addEventListener("click", clickThree);

reset.addEventListener("click", () => {
    two.style.backgroundColor = "red";
    three.style.backgroundColor = "yellow";
    two.addEventListener("click", clickTwo);
    three.addEventListener("click", clickThree);
    values = 0;
    counter.innerText = values;
})

propSwitch.addEventListener("click", () => {
    if (prop) {
        prop = false;
        propSwitch.innerText = "Start";
    }
    else {
        prop = true;
        propSwitch.innerText = "Stop";
    }
})
