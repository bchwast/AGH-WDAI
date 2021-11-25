let size = 50;
let balloon = document.getElementById("balloon");
let menu = document.getElementById("menu");
document.body.addEventListener("keydown", balloonControl);
balloon.addEventListener("mousedown", balloonMenu)
menu.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("click", () => menu.style.display = "none");

function balloonSize(newSize) {
    size = newSize;
    balloon.style.fontSize = size + "px";
}

function balloonControl(event) {
    if (event.key === "ArrowUp") {
        if (size > 200) {
            balloon.textContent = "💥";
            document.body.removeEventListener("keydown", balloonControl);
        }
        else {
            balloonSize(size * 1.1);
            event.preventDefault();
        }
    }
    else if (event.key === "ArrowDown") {
        if (size > 5) {
            balloonSize(size * 0.9);
        }
        event.preventDefault();
    }
}

function balloonMenu(event) {
    if (size <= 200) {
        if (event.ctrlKey && event.button === 2) {
            event.preventDefault();
            menu.innerText = "Size of the balloon is: " + size;
            menu.style.display = "block";
            menu.style.left = (event.pageX - 10)+"px";
            menu.style.top = (event.pageY - 10)+"px";
        }
    }
}
