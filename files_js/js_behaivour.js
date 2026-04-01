// 1. DICCIONARI DE TRADUCCIONS (Sempre al principi)
const i18n = {
  ca: {
    labels: {
      p_title: "Dissolucions àcid-bàsiques",
      p_ph: "valor pH",
      p_type: "tipus",
      p_comparison: "La mescla és tan àcida com:",
      btn_more: "Més bàsic",
      btn_less: "Més àcid",
      btn_reset: "Restablir",
      p_lang: "Idioma",
      p_typo: "Tipografies",
      btn_dis: "Mode dislèxic",
      p_dark: "Mode fosc",
      btn_dark: "Mode fosc",
      p_contrast: "Contrast",
      btn_contrast: "Alt contrast",
      p_size:"Mida",
      btn_size:"Augmentar mida"
    },
    kind_labels: ["Àcid fort", "Àcid feble", "Neutre", "Base feble", "Base forta"],
    details: {
      14: { post: "Es tracta d'un medi extremadament bàsic. Pot provocar reaccions molt agressives i és altament corrosiu.", info1: "Sosa càustica", info2: "Desembussador de canonades" },
      13: { post: "És una base molt forta, amb gran capacitat de descompondre substàncies i eliminar residus difícils.", info1: "Lleixiu fort", info2: "Netejador de forns" },
      12: { post: "Presenta una alcalinitat elevada, amb un comportament clarament bàsic i reactiu.", info1: "Lleixiu diluïda", info2: "Aigua amb bicarbonat concentrat" },
      11: { post: "És una base forta d’ús habitual en la neteja, amb capacitat per desgreixar i alterar substàncies.", info1: "Amoníac domèstic diluït", info2: "Netejador de superfícies" },
      10: { post: "Mostra un caràcter bàsic moderat, prou per produir canvis químics apreciables.", info1: "Detergent suau", info2: "Llet de magnesi" },
      9: { post: "És lleugerament bàsic, amb propietats suaus però útils en processos de neteja.", info1: "Sabó de mans", info2: "Pasta de dents" },
      8: { post: "Presenta una lleugera basicitat, molt propera a la neutralitat però amb tendència alcalina.", info1: "Aigua de mar", info2: "Clara d'ou" },
      7: { post: "Es tracta d'un medi neutre, on no predomina ni el caràcter àcid ni el bàsic.", info1: "Aigua destil·lada", info2: "Aigua pura" },
      6: { post: "És lleugerament àcid, amb un comportament suau i proper a la neutralitat.", info1: "Llet", info2: "Aigua de pluja" },
      5: { post: "Presenta una acidesa moderada, perceptible, però no extrema.", info1: "Cafè", info2: "Pell humana" },
      4: { post: "És un medi clarament àcid, on ja es poden observar propietats típiques dels àcids.", info1: "Tomàquet", info2: "Cervesa" },
      3: { post: "Mostra una acidesa notable, amb capacitat de reaccionar amb diverses substàncies.", info1: "Refresc de cola", info2: "Suc de taronja" },
      2: { post: "És un medi molt àcid, amb una elevada concentració d'ions d'hidrogen.", info1: "Suc de llimona", info2: "Vinagre fort" },
      1: { post: "Presenta una acidesa extrema, amb un comportament químic molt agressiu.", info1: "Suc gàstric", info2: "Àcid de bateries diluït" },
      0: { post: "És el nivell més alt d'acidesa, amb propietats altament corrosives i reactives.", info1: "Bateria d'àcid sulfúric concentrat", info2: "Àcid clorhídric concentrat" }
    }
  },
  es: {
    labels: {
      p_title: "Disoluciones ácido-básicas",
      p_ph: "valor pH",
      p_type: "tipo",
      p_comparison: "La mezcla es tan ácida como:",
      btn_more: "Más básico",
      btn_less: "Más ácido",
      btn_reset: "Restablecer",
      p_lang: "Lang",
      p_typo: "Tipografías",
      btn_dis: "Modo disléxico",
      p_dark: "Modo oscuro",
      btn_dark: "Modo oscuro",
      p_contrast: "Contraste",
      btn_contrast: "Modo alto contraste",
      p_size:"Tamaño",  
      btn_size:"Augmentar tamaño"
    },
    kind_labels: ["Ácido fuerte", "Ácido flojo", "Neutro", "Base floja", "Base fuerte"],
    details: {
      14: { post: "Se trata de un medio extremadamente básico. Altamente corrosivo.", info1: "Sosa cáustica", info2: "Desatascador" },
      13: { post: "Es una base muy fuerte, elimina residuos difíciles.", info1: "Lejía fuerte", info2: "Limpiador de hornos" },
      12: { post: "Alcalinidad elevada, comportamiento reactivo.", info1: "Lejía diluida", info2: "Bicarbonato concentrado" },
      11: { post: "Base fuerte de limpieza, capacidad desengrasante.", info1: "Amoniaco diluido", info2: "Limpiador superficies" },
      10: { post: "Carácter básico moderado.", info1: "Detergente suave", info2: "Leche de magnesia" },
      9: { post: "Ligeramente básico, propiedades suaves.", info1: "Jabón de manos", info2: "Pasta de dientes" },
      8: { post: "Ligera basicidad, cercana a la neutralidad.", info1: "Agua de mar", info2: "Clara de huevo" },
      7: { post: "Medio neutro, no predomina ácido ni básico.", info1: "Agua destilada", info2: "Agua pura" },
      6: { post: "Ligeramente ácido, comportamiento suave.", info1: "Leche", info2: "Agua de lluvia" },
      5: { post: "Acidez moderada, perceptible pero no extrema.", info1: "Café", info2: "Piel humana" },
      4: { post: "Medio claramente ácido.", info1: "Tomate", info2: "Cerveza" },
      3: { post: "Acidez notable, capacidad de reaccionar.", info1: "Refresco de cola", info2: "Zumo de naranja" },
      2: { post: "Medio muy ácido, alta concentración de hidrógeno.", info1: "Zumo de limón", info2: "Vinagre fuerte" },
      1: { post: "Acidez extrema, comportamiento muy agresivo.", info1: "Jugo gástrico", info2: "Ácido de baterías" },
      0: { post: "Nivel más alto de acidez, altamente corrosivo.", info1: "Ácido sulfúrico", info2: "Ácido clorhídrico" }
    }
  },
  en: {
    labels: {
      p_title: "Acid-Base Solutions",
      p_ph: "pH value",
      p_type: "type",
      p_comparison: "The mixture is as acidic as:",
      btn_more: "More basic",
      btn_less: "More acidic",
      btn_reset: "Reset",
      p_lang: "Language",
      p_typo: "Typography",
      btn_dis: "Dyslexic mode",
      p_dark: "Dark mode",
      btn_dark: "Dark mode",
      p_contrast: "Contrast",
      btn_contrast: "High contrast mode",
      p_size:"Size",
      btn_size:"Size up"
    },
    kind_labels: ["Strong Acid", "Weak Acid", "Neutral", "Weak Base", "Strong Base"],
    details: {
      14: { post: "Extremely basic. Highly aggressive and corrosive.", info1: "Caustic soda", info2: "Drain cleaner" },
      13: { post: "Very strong base, removes tough residues.", info1: "Strong bleach", info2: "Oven cleaner" },
      12: { post: "High alkalinity, reactive behavior.", info1: "Diluted bleach", info2: "Baking soda water" },
      11: { post: "Strong base for cleaning, degreasing power.", info1: "Household ammonia", info2: "Surface cleaner" },
      10: { post: "Moderate basic character.", info1: "Mild detergent", info2: "Milk of magnesia" },
      9: { post: "Slightly basic, mild properties.", info1: "Hand soap", info2: "Toothpaste" },
      8: { post: "Slight basicity, close to neutrality.", info1: "Seawater", info2: "Egg white" },
      7: { post: "Neutral medium, balanced state.", info1: "Distilled water", info2: "Pure water" },
      6: { post: "Slightly acidic, mild behavior.", info1: "Milk", info2: "Rainwater" },
      5: { post: "Moderate acidity, perceptible but not extreme.", info1: "Coffee", info2: "Human skin" },
      4: { post: "Clearly acidic medium.", info1: "Tomato", info2: "Beer" },
      3: { post: "Notable acidity, reacts easily.", info1: "Cola soda", info2: "Orange juice" },
      2: { post: "Very acidic medium, high hydrogen concentration.", info1: "Lemon juice", info2: "Strong vinegar" },
      1: { post: "Extreme acidity, very aggressive chemical behavior.", info1: "Gastric juice", info2: "Battery acid" },
      0: { post: "Highest level of acidity, highly corrosive.", info1: "Sulphuric acid", info2: "Hydrochloric acid" }
    }
  }
};

// 2. VARIABLES D'ESTAT
let currentLang = document.documentElement.lang || "es";
let t = i18n[currentLang] || i18n['es'];

// 3. ELEMENTS DEL DOM
const value = document.getElementById("value");
const kind = document.getElementById("kind");
const post_it = document.getElementById("post_it");
const info_1 = document.getElementById("info_1");
const info_2 = document.getElementById("info_2");
const vas_img = document.getElementById("vas");
const ex1_img = document.getElementById("exemple_1");
const ex2_img = document.getElementById("exemple_2");

// 4. FUNCIONS DE REFRESC
function triggerPulse() {
  const element = document.querySelector('.simulatorscreen_content');
  if (element) {
    element.classList.remove('page-animate');
    void element.offsetWidth;
    element.classList.add('page-animate');
  }
}

function refreshUI() {
  let current = Number(value.textContent);

  // Actualitzar classificació (Àcid/Neutre/Base) segons diccionari actiu
  if (current > 10) kind.textContent = t.kind_labels[4];
  else if (current > 7) kind.textContent = t.kind_labels[3];
  else if (current == 7) kind.textContent = t.kind_labels[2];
  else if (current > 3) kind.textContent = t.kind_labels[1];
  else kind.textContent = t.kind_labels[0];

  // Actualitzar contingut del post-it i textos d'exemples
  let data = t.details[current];
  if (data) {
    post_it.textContent = data.post;
    info_1.textContent = data.info1;
    info_2.textContent = data.info2;
  }

  // Actualitzar imatges
  vas_img.src = `/files_images/images_vas/vas_acidity_${current}.png`;
  ex1_img.src = `/files_images/images_exemple/exemple_1.${current}.png`;
  ex2_img.src = `/files_images/images_exemple/exemple_2.${current}.png`;

  triggerPulse();
}

function translatePage(langCode) {
  currentLang = langCode;
  t = i18n[langCode] || i18n['es'];
  document.documentElement.lang = langCode;

  // Traduir labels estàtics
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t.labels[key]) el.textContent = t.labels[key];
  });

  refreshUI();
   triggerPulse();
}

// 5. LISTENERS
document.querySelectorAll(".btn-lang").forEach(button => {
  button.addEventListener("click", () => {
    const selectedLang = button.getAttribute("data-lang");
    translatePage(selectedLang);
  });
});

document.getElementById("add").addEventListener("click", () => {
  let current = Number(value.textContent);
  if (current < 14) {
    value.textContent = current + 1;
    refreshUI();
     triggerPulse();
  }
});

document.getElementById("sub").addEventListener("click", () => {
  let current = Number(value.textContent);
  if (current > 0) {
    value.textContent = current - 1;
    refreshUI();
     triggerPulse();
  }
});

document.getElementById("zer").addEventListener("click", () => {
  value.textContent = 7;
  refreshUI();
  triggerPulse();

});

// 6. INICIAR LA PÀGINA
translatePage(currentLang);
 triggerPulse();