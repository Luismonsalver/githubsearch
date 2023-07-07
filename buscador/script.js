const input = document.querySelector("#search");
const userList = document.querySelector("#users");
const url = "https://api.github.com/search/users?q=";
const loginUrl = "https://api.github.com/users/"

let userResults = []

function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

input.addEventListener("input", debounce(handleChange, 2000));