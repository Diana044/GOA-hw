//   1) ააწყოთ register და login
//  გვერდები თავისი ფუნქციონალით კარგი დიზაინით და + localstorage


const form = document.getElementById('form')
const btn = document.getElementById('btn')


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const username = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    if (!username || !email || !password) {
        alert("Please fill all fields")
        return
    }

    const newUser = {
        username : username,
        email : email,
        password :password,
    }
    
    let usersArr = JSON.parse(localStorage.getItem('users')) || []

    usersArr.push(newUser)

    localStorage.setItem('users', JSON.stringify(usersArr))

})