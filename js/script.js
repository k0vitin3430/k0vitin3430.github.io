document.getElementById("linkBibl").addEventListener("click", function() {
    document.getElementById("overlay").style.visibility = "visible";
});

document.getElementById("zamkBibl").addEventListener("click", function() {
    document.getElementById("overlay").style.visibility = "hidden";
});

document.getElementById("gora").addEventListener("click", function() {
    scroll(0, 0);
});