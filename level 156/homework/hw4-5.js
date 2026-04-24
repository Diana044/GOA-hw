

// 4)TODO app --- > input + add button

// დავალება:

// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

// 5)წინა დავალებას დაამატე:

// დავალება:

// თითო task-ს ჰქონდეს delete ღილაკი
// წაშლისას localStorage-იც განახლდეს


const input = document.getElementById('input')
const button = document.getElementById('btn')
const list = document.getElementById('list')


if (localStorage.getItem('tasks')) {
    list.innerHTML = localStorage.getItem('tasks')
}


button.addEventListener('click', () => {
    if (input.value === '') {
        return
    }

    const div = document.createElement('div')
    const text = document.createElement('span')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'delete'

    text.textContent = input.value

    div.style.cssText = `
        border:1px solid white;
        padding:10px;
        width:200px;
        border-radius:10px;
        margin:5px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:20px; 
    `

    deleteBtn.onclick = function () {
        list.removeChild(div)
        localStorage.setItem('tasks', list.innerHTML)
    }

    div.appendChild(text)
    div.appendChild(deleteBtn)
    list.appendChild(div)

    localStorage.setItem('tasks', list.innerHTML)

    input.value = ''
})
