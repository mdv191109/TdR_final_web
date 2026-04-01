function change_contrast() {
  const style = document.getElementById("palette-style");
  const button_contrast = document.getElementById("contrast_button");

  if (style.getAttribute("href") === "files_css/palette_lightmode.css") {
    style.setAttribute("href", "files_css/palette_contrast_light.css");
    button_contrast.textContent = "modo normal";
  } else if (style.getAttribute("href") === "files_css/palette_darkmode.css") {
    style.setAttribute("href", "files_css/palette_contrast_dark.css");
    button_contrast.textContent = "modo normal";
  } else if (
    style.getAttribute("href") === "files_css/palette_contrast_light.css"
  ) {
    style.setAttribute("href", "files_css/palette_lightmode.css");
    button_contrast.textContent = "modo alto contraste";
  } else if (style.getAttribute("href") === "files_css/palette_contrast_dark.css")   {
    style.setAttribute("href", "files_css/palette_darkmode.css");
    button_contrast.textContent = "modo alto contraste";
  }
}
