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