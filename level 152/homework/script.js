class TodoApp {
  constructor() {
    this.input = document.getElementById('todoInput')
    this.list = document.getElementById('todoList')
    this.addBtn = document.getElementById('addBtn')

    this.addBtn.onclick = () => this.addTask()
  }

  addTask() {
    const text = this.input.value
    if (text === '') {
        alert('input must be filed')
        return
    }

    const li = document.createElement('li')
    
    const span = document.createElement('span')
    span.innerText = text
    
    const br = document.createElement('br')
    
    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'

    deleteBtn.onclick = () => li.remove()

    editBtn.onclick = () => {
        console.log('ddd')
}

    li.appendChild(span)
    li.appendChild(br)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
    this.list.appendChild(li)
    
    this.input.value = ''
  }
}

const app = new TodoApp()