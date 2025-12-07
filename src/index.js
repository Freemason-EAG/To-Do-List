import _ from 'lodash'
import './style.css'
import { htmlEscape } from 'escape-goat'

const render = (tasks, taskList) => {
    taskList.textContent = ''
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.textContent = task.text
        li.className = 'list-group-item'
        li.dataset.id = task.id // добавляем data-id атрибут с уникальным id

        if (task.completed) {
            li.style.textDecoration = 'line-through'
        }
        
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete" 
        deleteButton.className = 'delete-btn'

        const doneButton = document.createElement('button')
        doneButton.textContent = task.completed ? "Return task" : "Done"
        doneButton.className = 'done-btn'

        li.appendChild(deleteButton)
        li.appendChild(doneButton)
        taskList.appendChild(li)
    })
}


const app = () => {
const state = {
    tasks: [],
}

const form = document.getElementById('todoForm')

const taskInput = form.elements.task
const addTaskButton = document.getElementById('addTask')
const taskList = document.getElementById('taskList')

taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
           const li = event.target.closest('li')
           const taskId = parseInt(li.dataset.id)
           state.tasks = state.tasks.filter(task => task.id !== taskId)
           render(state.tasks, taskList)
        }
        else if (event.target.classList.contains('done-btn')) {
            const li = event.target.closest('li')
            const taskId = parseInt(li.dataset.id)
            const selectedTask = state.tasks.find(task => task.id === taskId)
            selectedTask.completed = !selectedTask.completed
            render(state.tasks, taskList)
        }
    })

form.addEventListener('submit', (e) => {
    e.preventDefault()
    taskInput.focus()

    const taskText = taskInput.value.trim()
    if (taskText === '') return

   const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false
    }
    state.tasks.unshift(newTask)
    render(state.tasks, taskList)
    taskInput.value = ''  
})
}

app()
