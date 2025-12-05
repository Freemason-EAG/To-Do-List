import _ from 'lodash'
import './style.css'
import { htmlEscape } from 'escape-goat'

const app = () => {
const state = {
    tasks: [],
}

const form = document.getElementById('todoForm')

const taskInput = form.elements.task
const addTaskButton = document.getElementById('addTask')
const taskList = document.getElementById('taskList')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    taskInput.focus()

    const taskText = taskInput.value.trim()
    if (taskText === '') return

    const task = { text: taskText }
    state.tasks.push(task)

    const li = document.createElement('li')
    li.textContent = task.text

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', () => {
        const index = state.tasks.indexOf(task)
        state.tasks.splice(index, 1)
        li.remove()
    })

    const doneButton = document.createElement('button')
    doneButton.textContent = "Done"
    doneButton.addEventListener('click', () => {
        if (doneButton.textContent === "Done") {
        li.style.textDecoration = 'line-through'
        doneButton.textContent = "Return task"
        }
        else if (doneButton.textContent === "Return task") {
            li.style.textDecoration = 'none'
            doneButton.textContent = "Done"
        }
    })
    li.appendChild(deleteButton)
    li.appendChild(doneButton)
    taskList.appendChild(li)

    taskInput.value = ''
})


}

app()


