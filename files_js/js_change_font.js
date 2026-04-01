 function change_font() {
      const style = document.getElementById("font-style");
      const button = document.getElementById("font_button");

      if (style.getAttribute("href") === "/files_css/typography_normal.css") {
        style.setAttribute("href", "/files_css/typography_dyslexic.css");
        button.textContent = "normal mode";
      } else {
        style.setAttribute("href", "/files_css/typography_normal.css");
        button.textContent = "dyslexic mode";
      }
    }