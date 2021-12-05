let img = [
    {
        "src": "https://picsum.photos/id/426/800/600",
        "alt": "mnt",
        "border": "5px solid red"
    },
    {
        "src": "https://picsum.photos/id/421/800/600",
        "alt": "sea",
        "border": "5px solid blue"
    }
]

let i = 0

function imageSwitch() {
    i++;
    i %= 2;
    let el = document.getElementById("mnt");
    let container = document.getElementById("container");
    el.src = img[i]["src"];
    el.alt = img[i]["alt"];
    container.style.border = img[i]["border"];
}
