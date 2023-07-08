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

//FUNCION DEBOUNCE PARA RETRASAR LA PETICION
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

//FUNCION searchApi SE EJECUTA CADA VEZ QUE SE INGRESA UN DATO EN LA ENTRADA DE TEXTO
  function handleChange(e) {
    console.log(e.target.value);
    searchApi(input.value);
    userList.innerHTML = ""; 
  }

//LA PETICION SE RETRASA 2 SEGUNDOS
input.addEventListener("input", debounce(handleChange, 2000));

//FUNCION QUE TRAE UNA LISTA DE USUARIOS CON NOMBRES DE USUARIOS PARECIDOS A LOS DEL VALOR DE ENTRADA, LUEGO EJECUTA UNA FUNCION
//QUE BUSCA EL USUARIO ESPECIFICO
function searchApi(user) {
  userResults = [];
  fetch(url + user + "+in:login")
    .then(response => response.json())
    .then(data => {
      const users = data.items;
      const userSearch = users.slice(0, 3);
      const searchPromises = userSearch.map(user => searchLogin(user));
      return Promise.all(searchPromises);
    })
    .then(() => {
      console.log(userResults);
      renderUsers();
    });
}

//DESPUES DE TRAER LOS USUARIOS ESPECIFICOS (MAX 3) LOS GUARDA EN UN ARRAY
async function searchLogin(userLogin){

  const response = await fetch(loginUrl + userLogin.login);
  const data = await response.json();
  console.log(data);

  userResults.push(data)

}

//MUESTRA EN EL HTML LOS DATOS QUE YO REQUIERA DEL ARRAY
function renderUsers() {
  if (userResults.length > 0) {
  userResults.forEach(user => {
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.innerHTML = `
      <h2>${user.login}</h2>
        <div class="image">
        <img src="${user.avatar_url}" alt="Avatar">
        </div>
        <div class="userData">
          <p class="text"><b>Nombre:</b> ${user.name ? user.name : "N/A"}</p>
          <p class="text"><b>Compañía:</b> ${user.company ? user.company : "N/A"}</p>
            <div class="otherData">
              <p><b>Repositorios:</b> ${user.public_repos}</p>
              <p><b>Seguidores:</b> ${user.followers}</p>
              <p><b>Siguiendo:</b> ${user.following}</p>
            </div>
        </div>
    `;
    userList.appendChild(userElement);
  });
  } else {
    const userElement = document.createElement("p");
    userElement.classList.add("nonExist");
    userElement.innerHTML = `
    No existen usuarios con el valor que ingresaste
    `
    userList.appendChild(userElement);
  }
}

//
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {

  const systemColorPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  if (systemColorPreference === 'dark') {
    document.body.classList.add('darkMode');
    darkModeButtonLabel.textContent = "Modo claro";
  } else {
    document.body.classList.remove('darkMode');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("darkMode");
  if (document.body.classList.contains("darkMode")) {
    darkModeButtonLabel.textContent = "Modo claro";
  } else {
    darkModeButtonLabel.textContent = "Modo oscuro";
  }
}


