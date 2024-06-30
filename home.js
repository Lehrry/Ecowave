document.addEventListener("DOMContentLoaded", function() {
    const ham = document.getElementById("hamnav");
    const offscreen = document.getElementById("offscreenmenu");
})

ham.addEventListener("click", function() {
    offscreen.classList.toggle("offscreenmenu");
})
