//FUNCION PARA CAMBIAR LA CLASE DEL BODY A DARKMODE, DEPENDIENDO DEL MODO EN EL QUE ESTÉ, EL TEXTO DEL BOTÓN CAMBIARÁ
function toggleDarkMode() {
    document.body.classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")) {
      sliderImage.src = "media/darkmode.png";
    } else {
      sliderImage.src = "media/lightmode.png";
    }
  }