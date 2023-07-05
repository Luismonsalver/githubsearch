const input = document.querySelector("#search");
const userList = document.querySelector("#users")

window.addEventListener("DOMContentLoaded", async () => {
    const data = await loadUsers()
    console.log(data)
    renderUsers(data)
});

async function loadUsers(){
    const response = await fetch('https://api.github.com/users')
        return await response.json()
}

input.addEventListener('keyup', e => {
    console.log(input.value)
})

function renderUsers(users) {

}