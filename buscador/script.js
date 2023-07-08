const input = document.querySelector("#search");
const userList = document.querySelector("#users");
const url = "https://api.github.com/search/users?q=";
const loginUrl = "https://api.github.com/users/"
const darkModeButton = document.querySelector("#darkModeButton");
const darkModeButtonLabel = document.querySelector("#darkModeButtonLabel");
const placeholderText = input.placeholder;

let userResults = []

//BOTON PARA CAMBIAR DE MODO CLARO A OSCURO
darkModeButton.addEventListener("click", toggleDarkMode);

//REMOVER Y DEVOLVER EL PLACEHOLDER
input.addEventListener("focus", function() {
  this.placeholder = "";
});

input.addEventListener("blur", function() {
  if (!this.value) {
    this.placeholder = placeholderText;
  }
});

//LA PETICION SE RETRASA 2 SEGUNDOS
input.addEventListener("input", debounce(handleChange, 2000));

//SE UTILIZA MATCHMEDIA PARA VERIFICAR LA PREFERENCIA DE MODO DEL ORDENADOR
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {

  const systemColorPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  if (systemColorPreference === 'dark') {
    document.body.classList.add('darkMode');
    darkModeButtonLabel.textContent = "Modo claro";
  } else {
    document.body.classList.remove('darkMode');
  }
}




