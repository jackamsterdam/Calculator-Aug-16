let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let answer_add = document.querySelector('#answer')
console.log(num1, num2, answer)

let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let answer_subtract = document.querySelector('#answer_subtract')



// function add(num1, num2) {
//     return num1 + num2
//     console.log(num1.value)
// }

function add() {
    console.log('hi')
    console.log(num1)
    console.log(num2)
    console.log(answer_add)
    console.log(num1.value + num2.value)
    let sum = (+num1.value) + (+num2.value)
    console.log(sum)

    answer_add.value = sum
        // return answer.value =sum ??? or i dont need return?
}

function subtract() {
    let sum = (+n1.value) - (+n2.value)
    answer_subtract.value = sum
}