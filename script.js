var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}

let span = document.querySelector(".up");

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};