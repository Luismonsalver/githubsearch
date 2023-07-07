const input = document.querySelector("#search");
const userList = document.querySelector("#users");
const url = "https://api.github.com/search/users?q=";
const loginUrl = "https://api.github.com/users/"

let userResults = []

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
      });
  }
  
  //DESPUES DE TRAER LOS USUARIOS ESPECIFICOS (MAX 3) LOS GUARDA EN UN ARRAY
  async function searchLogin(userLogin){
  
    const response = await fetch(loginUrl + userLogin.login);
    const data = await response.json();
    console.log(data);
  
    userResults.push(data)
  
  }