window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var menu = document.querySelector(".menu");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTopBtn").style.display = "block";
        menu.classList.add("scrolled");
    } else {
        document.getElementById("toTopBtn").style.display = "none";
        menu.classList.remove("scrolled");
    }
}
