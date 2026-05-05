const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
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

        let loggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || []

        if (!loggedUsers.includes(username)) {
            loggedUsers.push(username)
        }

        localStorage.setItem('loggedUsers', JSON.stringify(loggedUsers))
    } else {
        alert('Wrong username or password')
    }
})