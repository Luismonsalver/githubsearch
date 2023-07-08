//FUNCION searchApi SE EJECUTA CADA VEZ QUE SE INGRESA UN DATO EN LA ENTRADA DE TEXTO
function handleChange(e) {
    console.log(e.target.value);
    searchApi(input.value);
    userList.innerHTML = ""; 
  }