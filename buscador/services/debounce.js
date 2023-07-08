//FUNCION DEBOUNCE PARA RETRASAR LA PETICION
//LOADER AGREGADO MIENTRAS HAYA RETRASO
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    userList.innerHTML = "";
    loader.classList.add('loading'); // MOSTRAR LOADER CUANDO HAYA RETRASO

    timer = setTimeout(() => {
      func.apply(this, args);
      loader.classList.remove('loading'); // OCULTAR LOADER CUANDO HAYA RETRASO
    }, delay);
  };
}

