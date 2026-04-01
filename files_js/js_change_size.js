let scaled = false;

function change_size() {
    const body = document.getElementById("main_sizescaling_content");

    if (scaled) {
        body.style.transformOrigin = "top center"; // Keeps it from going off-top
        body.style.transform = "scale(1) translate(0, 0)";
    } else {
        body.style.transformOrigin = "top center";
        // Reduced translate because scaling from top-center already shifts position
        body.style.transform = "scale(1.3) translateY(10px)"; 
    }

    scaled = !scaled;
}