
let pageLoaded = false;
let minTimePassed = false;

function tryShowPage() {
    if (pageLoaded && minTimePassed) {
        const loader = document.getElementById("loader");
        const content = document.getElementById("js_titlescreen_content");

        // Fade out loader
        loader.classList.add("hide");

        // After fade, remove it and show content
        setTimeout(() => {
            loader.style.display = "none";
            content.classList.add("show");
            document.body.classList.remove("loading");
        }, 200);
    }
}

window.addEventListener("load", function () {
    pageLoaded = true;
    tryShowPage();
});

setTimeout(function () {
    minTimePassed = true;
    tryShowPage();
}, 750);