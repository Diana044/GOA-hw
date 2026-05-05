const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    const username = e.target.name.value
    const password = e.target.password.value

    let users = JSON.parse(localStorage.getItem('users')) || []

    let foundUser = false

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = true
            break
        }
    }

    if (foundUser) {
        alert('Login successful')
        localStorage.setItem('loggedUser', username)
    } else {
        alert('Wrong username or password')
    }
})