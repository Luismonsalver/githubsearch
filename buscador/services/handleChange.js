//FUNCION searchApi SE EJECUTA CADA VEZ QUE SE INGRESA UN DATO EN LA ENTRADA DE TEXTO
//SI EL USUARIO COLOCA ESPACIOS EN BLANCO, NO SE REALIZARÁ LA PETICIÓN,
//ADEMÁS SE ELIMINARAN LOS ESPACIOS EN BLANCO AL INICIO Y AL FINAL DEL TEXTO CON input.value.trim()
function handleChange(e) {
    console.log(e.target.value);
    const userInput = input.value.trim();
    if (userInput) {
      searchApi(userInput);
      userList.innerHTML = "";
    }
  }