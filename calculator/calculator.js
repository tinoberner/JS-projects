//Screen
const screen = document.getElementById("screen")

//Numbers
const one = document.getElementById("one-btn");
const two = document.getElementById("two-btn");
const three = document.getElementById("three-btn");
const four = document.getElementById("four-btn");
const five = document.getElementById("five-btn");
const six = document.getElementById("six-btn");
const seven = document.getElementById("seven-btn");
const eight = document.getElementById("eight-btn");
const nine = document.getElementById("nine-btn");
const zero = document.getElementById("zero-btn");

//Operators & misc.
const plusButton = document.getElementById("plus-btn");
const minusButton = document.getElementById("minus-btn");
const multiButton = document.getElementById("multi-btn");
const divedButton = document.getElementById("dived-btn");
const enterButton = document.getElementById("enter-btn");
const clearButton = document.getElementById("clear-btn");

const memory = [];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const operators = ["+", "-", "*", "/"];

function updateScreen(){
    screen.innerText = memory.join('');
}

function clearMemory(){
    memory.length = 0;
    updateScreen();
}

function enterCalc(){
    if (operators.includes(memory[memory.length - 1])){
        alert("please end with a number");
    } else {  
    const str = memory.join('');
    const result = new Function ('return ' + str)();
    screen.innerText = result;
    }
}

one.addEventListener("click", () => {memory.push(numbers[0]); updateScreen();});
two.addEventListener("click", () => {memory.push(numbers[1]); updateScreen();});
three.addEventListener("click", () => {memory.push(numbers[2]); updateScreen();});
four.addEventListener("click", () => {memory.push(numbers[3]); updateScreen();});
five.addEventListener("click", () => {memory.push(numbers[4]); updateScreen();});
six.addEventListener("click", () => {memory.push(numbers[5]); updateScreen();});
seven.addEventListener("click", () => {memory.push(numbers[6]); updateScreen();});
eight.addEventListener("click", () => {memory.push(numbers[7]); updateScreen();});
nine.addEventListener("click", () => {memory.push(numbers[8]); updateScreen();});
zero.addEventListener("click", () => {memory.push(numbers[9]); updateScreen();});

plusButton.addEventListener("click", () => {memory.push(operators[0]); updateScreen();});
minusButton.addEventListener("click", () => {memory.push(operators[1]); updateScreen();});
multiButton.addEventListener("click", () => {memory.push(operators[2]); updateScreen();});
divedButton.addEventListener("click", () => {memory.push(operators[3]); updateScreen();});

enterButton.addEventListener("click", enterCalc);
clearButton.addEventListener("click", clearMemory);
