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
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav.menu a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        const menu = document.querySelector('.menu');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("toTopBtn").style.display = "block";
            menu.classList.add('scrolled');
        } else {
            document.getElementById("toTopBtn").style.display = "none";
            menu.classList.remove('scrolled');
        }
    }
});