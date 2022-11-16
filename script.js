const h1 = document.querySelectorAll('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('click', sumInputValues)

function sumInputValues(event){
    //console.log({event})
    event.preventDefault()
    pResult.innerText = Number(input1.value) + Number(input2.value)
}