let previousScrollPosition = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (previousScrollPosition > currentScrollPos) {
        document.getElementById("section-1").style.top = "0";
        document.getElementById("section-1").style.boxShadow = '0 0 20px 0 black';
    } else {
        document.getElementById("section-1").style.top = "-260px";

        document.getElementById("section-1").style.boxShadow = '0 0 0 0';
    }
    previousScrollPosition = currentScrollPos;
}