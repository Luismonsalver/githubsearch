const input = document.querySelector("#search");
const userList = document.querySelector("#users")

window.addEventListener("DOMContentLoaded", async () => {
    const data = await loadUsers()
    renderUsers(data)
    console.log(data)
});

async function loadUsers(){
    const response = await fetch('https://api.github.com/users')
        return await response.json()
}

input.addEventListener('keyup', e => {
    console.log(input.value)
})

const createUserItems = users => users.map(user => `<li>${user.login} ${user.id}</li>`).join(" ")

function renderUsers(users) {
    const itemString = createUserItems(users)
    userList.innerHTML = itemString
}