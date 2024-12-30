// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

let navbar = document.getElementById("bottom_navbar");

let StickPosition = navbar.offsetTop;

function ToggleStickyClass(){
    if (window.pageYOffset >= StickPosition)
        navbar.classList.add("sticky");
    else
        navbar.classList.remove("sticky");
}

window.onscroll = () => {
    ToggleStickyClass();
}
window.onresize = () => {
    StickPosition = navbar.offsetTop;
}