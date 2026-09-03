const translations = {
  tr: {
    skip: "İçeriğe geç",
    navAbout: "Hakkımda",
    navTools: "Araçlar",
    navWork: "İşler",
    navSupport: "Destek",
    navContact: "İletişim",
    heroEyebrow: "3D ARTIST · ANIMATOR · WEB DESIGNER",
    heroTitle: "Dijital dünyalar için<br />görsel deneyimler.",
    heroDescription:
      "Oyun projeleri için optimize 3D Assetler ve akıcı animasyonlar üretiyor, modern web siteleri tasarlıyorum.",
    viewWork: "İşlerimi Gör",
    getInTouch: "İletişime Geç",
    availability: "Freelance ve ortak projelere açığım",
    aboutLabel: "HAKKIMDA",
    aboutTitle: "Fikirleri, oyun dünyasına uygun görsel üretimlere dönüştürüyorum.",
    aboutText:
      "Oyunlar için 3D modelleme ve animasyon tarafında üretim yapıyorum. Ağırlık olarak Maya ve Unreal Engine oyun projelerine optimize Assetler ve akıcı animasyonlar hazırlıyorum. Ayrıca modern web tasarımı da yapıyorum.",
    collaborationNote:
      "Freelance ve proje bazlı işlerin yanı sıra ortak proje tekliflerine açığım. Staj veya tam zamanlı iş kabul etmiyorum.",
    toolsLabel: "ARAÇLAR",
    toolsTitle: "Üretim sürecimde kullandığım araçlar.",
    workLabel: "SEÇİLİ İŞLER",
    workTitle: "Oyun ve animasyon projelerinden seçili işler.",
    animationLabel: "Animasyon",
    gameLabel: "Oyun",
    releasedLabel: "Yayınlandı",
    tbaLabel: "Duyurulacak",
    blindDescription: "Animasyon için oyun odaklı 3D Assetler Üretiyorum.",
    solastagiaGameDescription:
      "Oyunun 3D model, animasyon, efekt ve tasarım üretimlerinde ve Kodlama işlerini hallediyorum.",
    solastagiaAnimationDescription:
      "Animasyon projesinde ağırlıklı olarak 3D modeller ve efektler üzerine çalışıyorum.",
    supportLabel: "DESTEK OL",
    supportTitle: "Üretimlerime katkıda bulun.",
    supportDescription:
      "Oyun, 3D modelleme ve animasyon çalışmalarımı Kreosus veya Patreon üzerinden destekleyebilirsin.",
    kreosusButton: "Kreosus üzerinden destek ol",
    patreonButton: "Patreon üzerinden destek ol",
    contactLabel: "İLETİŞİM",
    contactTitle: "Birlikte bir şey üretelim.",
    contactDescription:
      "Ortak bir proje fikrin varsa e-posta veya Instagram üzerinden ulaşabilirsin.",
    domainNote: "Alan adını henüz bağlamadım bir ara unutmaz yada üşenmezisem bağlayacağım.",
    emailLabel: "E-posta",
    backToTop: "Yukarı dön",
  },
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navTools: "Tools",
    navWork: "Work",
    navSupport: "Support",
    navContact: "Contact",
    heroEyebrow: "3D ARTIST · ANIMATOR · WEB DESIGNER",
    heroTitle: "Visual experiences<br />for digital worlds.",
    heroDescription:
      "I create optimized 3D assets and fluid animations for game projects, alongside modern web experiences.",
    viewWork: "View My Work",
    getInTouch: "Get in Touch",
    availability: "Open to freelance & collaborations",
    aboutLabel: "ABOUT",
    aboutTitle: "I turn ideas into visuals built for game worlds.",
    aboutText:
      "I work across 3D modeling and animation for games. With a workflow centered around Maya and Unreal Engine, I create optimized assets and fluid animations for game projects. I also design modern websites.",
    collaborationNote:
      "I am available for freelance and project-based work, as well as collaborative project proposals. I am not available for internships or full-time roles.",
    toolsLabel: "TOOLS",
    toolsTitle: "Tools I use throughout my creative process.",
    workLabel: "SELECTED WORK",
    workTitle: "Selected work from game and animation projects.",
    animationLabel: "Animation",
    gameLabel: "Game",
    releasedLabel: "Released",
    tbaLabel: "To be announced",
    blindDescription: "Game-ready 3D asset production for an animation project.",
    solastagiaGameDescription:
      "I contribute to the game's 3D modeling, animation, effects, and design production.",
    solastagiaAnimationDescription:
      "I work primarily on 3D models and effects for the animation project.",
    supportLabel: "SUPPORT MY WORK",
    supportTitle: "Help support what I create.",
    supportDescription:
      "You can support my game, 3D modeling, and animation work through Kreosus or Patreon.",
    kreosusButton: "Support me on Kreosus",
    patreonButton: "Support me on Patreon",
    contactLabel: "CONTACT",
    contactTitle: "Let's create something together.",
    contactDescription:
      "If you have a collaborative project in mind, reach out by email or Instagram.",
    domainNote: "I haven't connected my custom domain yet; I'll add it at a later date.",
    emailLabel: "Email",
    backToTop: "Back to top",
  },
};

const languageToggle = document.querySelector(".language-toggle");
const languageLabels = document.querySelectorAll("[data-language-label]");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const dictionary = translations[language];

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.documentElement.lang = language;
  document.title =
    language === "tr"
      ? "utkuumut — 3D Artist & Animator"
      : "utkuumut — 3D Artist & Animator";

  languageToggle.setAttribute(
    "aria-label",
    language === "tr" ? "Switch to English" : "Türkçeye geç"
  );

  languageLabels.forEach((label) => {
    label.classList.toggle("is-active", label.dataset.languageLabel === language);
  });

  localStorage.setItem("utkuumut-language", language);
}

languageToggle.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "tr" ? "en" : "tr";
  setLanguage(nextLanguage);
});

const savedLanguage = localStorage.getItem("utkuumut-language");
setLanguage(savedLanguage === "en" ? "en" : "tr");

document.querySelector("#year").textContent = new Date().getFullYear();
