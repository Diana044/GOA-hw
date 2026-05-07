const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    if (!username || !email || !password) {
        alert("Please fill all fields")
        return
    }

    let usersArr = JSON.parse(localStorage.getItem('users')) || []

    let exists = false

    for (let i = 0; i < usersArr.length; i++) {
        if (usersArr[i].email === email) {
            exists = true
            break
        }
    }

    if (exists) {
        alert('Email already exists')
        return
    }

    const newUser = {
        username:username,
        email:email,
        password:password
    }

    usersArr.push(newUser)
    localStorage.setItem('users', JSON.stringify(usersArr))

    alert('Registration successful!')
    form.reset()
})