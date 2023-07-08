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