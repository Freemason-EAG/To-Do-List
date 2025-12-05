import _ from 'lodash'
import './style.css'
import { htmlEscape } from 'escape-goat'

const calculator = () => {

    let sum = 0

    const result = document.getElementById('result')

    const form = document.querySelector('form')

   const numberInput = document.querySelector('input[type=number]')
   numberInput.focus()

   const resetButton = document.querySelector('button')

   form.addEventListener('submit', (e) => {
    e.preventDefault()
    

    let curNum = parseInt(numberInput.value, 10)
    sum += curNum
    numberInput.value = ''
    result.textContent = sum
    numberInput.focus()
   })

   resetButton.addEventListener('click', () => { 
    sum = 0
    result.textContent = sum
    form.reset()
    numberInput.focus()
   }) 
}

calculator()