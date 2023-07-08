//FUNCION DEBOUNCE PARA RETRASAR LA PETICION
function debounce(func, delay) {
  let timer;
  const loader = document.querySelector('#loader');

  return function (...args) {
    clearTimeout(timer);
    userList.innerHTML = "";
    loader.classList.add('loading'); // Mostrar el loader al iniciar el retraso

    timer = setTimeout(() => {
      func.apply(this, args);
      loader.classList.remove('loading'); // Ocultar el loader al completar el retraso
    }, delay);
  };
}

