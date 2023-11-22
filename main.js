// STEPS: 
// 1. press one number - save that number
// 2. press the operator - save that operator
// 3. press the second number - save that number 
// 4. press equal sign - calculate the result 
const inputBox = document.getElementById('input_box')

let firstNumber 
let secondNumber 
let step = 0
let operation
let result = 0

let numArray = []
let secondNumArray = []

function getNumber(num){
    if(step === 0 || step === 1){
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join(''))
        inputBox.value = firstNumber
    }else if (step === 2){
        secondNumArray.push(num)
        secondNumber = Number(secondNumArray.join(''))
        inputBox.value = secondNumber
    }
}

function getOperator(op){
    step = 2
    operation = op
}

function clearResult(){
    inputBox.value = 0
    firstNumber = null
    secondNumber = null
    step = 0 
    operation = null
    result = 0
    numArray = []
    secondNumArray = []
}

const getResult = () => {
if (operation === '+'){
    result = firstNumber + secondNumber
    inputBox.value = result
}else if (operation === '-'){
    result = firstNumber - secondNumber
    inputBox.value = result
}else if (operation === '*'){
    result = firstNumber * secondNumber
    inputBox.value = result
}else if (operation === '/'){
    result = firstNumber / secondNumber
    inputBox.value = result
}
}

function deleteTheLast() {
    if (step === 1) {
        numArray.pop();
        firstNumber = Number(numArray.join(''));
        inputBox.value = firstNumber || 0; 
    } else if (step === 2) {
        secondNumArray.pop();
        secondNumber = Number(secondNumArray.join(''));
        inputBox.value = secondNumber || 0; 
    }
}