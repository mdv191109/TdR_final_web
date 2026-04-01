function change_palette() {
    const style = document.getElementById("palette-style");
    const button_mode = document.getElementById("palette_button");

    if (style.getAttribute("href") === "files_css/palette_lightmode.css") {
        style.setAttribute("href", "files_css/palette_darkmode.css");
        button_mode.textContent = "modo claro";

    } else if (style.getAttribute("href") === "files_css/palette_darkmode.css") {
        style.setAttribute("href", "files_css/palette_lightmode.css");
        button_mode.textContent = "modo oscuro";
    }

    else if (style.getAttribute("href") === "files_css/palette_contrast_light.css") {
        style.setAttribute("href", "files_css/palette_contrast_dark.css");
        button_mode.textContent = "modo oscuro";
    }
    else {
        style.setAttribute("href", "files_css/palette_contrast_light.css");
        button_mode.textContent = "modo claro";
    }
}
