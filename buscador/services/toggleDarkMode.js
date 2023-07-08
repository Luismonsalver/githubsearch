//FUNCION PARA CAMBIAR LA CLASE DEL BODY A DARKMODE, DEPENDIENDO DEL MODO EN EL QUE ESTÉ, EL TEXTO DEL BOTÓN CAMBIARÁ
function toggleDarkMode() {
    document.body.classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")) {
      darkModeButtonLabel.textContent = "Modo claro";
    } else {
      darkModeButtonLabel.textContent = "Modo oscuro";
    }
  }