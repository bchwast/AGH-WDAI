function imageSwitch() {
    if (document.getElementById("mnt").style.display === "none") {
        document.getElementById("sea").style.display = "none";
        document.getElementById("container").style.border = "5px solid red";
        document.getElementById("mnt").style.display = "block";
    }
    else {
        document.getElementById("mnt").style.display = "none";
        document.getElementById("container").style.border = "5px solid blue";
        document.getElementById("sea").style.display = "block";
    }
}