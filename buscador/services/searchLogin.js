//DESPUES DE TRAER LOS USUARIOS ESPECIFICOS (MAX 3) LOS GUARDA EN UN ARRAY
async function searchLogin(userLogin){

    const response = await fetch(loginUrl + userLogin.login);
    const data = await response.json();
    console.log(data);
  
    userResults.push(data)
  
  }