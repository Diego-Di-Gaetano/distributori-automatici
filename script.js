// Attiva/disattiva dark mode + salva preferenza
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("tema", isDark);
}

// Carica tema salvato o preferenza sistema
function caricaTema() {
  const salvato = localStorage.getItem("tema");

  if (salvato === "true") {
    document.body.classList.add("dark");
  } 
  else if (salvato === null && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
}

// Avvio
document.addEventListener("DOMContentLoaded", () => {
  caricaTema();

  const btn = document.getElementById("temaBtn");

  if (btn) {
    btn.addEventListener("click", toggleDarkMode);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 50);
});
function saluta() {
  document.getElementById("testo").innerText = "Ciao benvenuta/o nel mio sito!";
}
