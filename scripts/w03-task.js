/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return (number1 + number2);
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2)
{
    return (number1 - number2);
}

function subtractNumbers()
{
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) =>
{
    return (number1 * number2);
}


let multiplyNumbers = () =>
{
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(mulNumber1, mulNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

let divide = (number1, number2) =>
{
    return (number1 / number2);
}


function divideNumbers()
{
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divNumber1, divNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function totalSpan()
{
    let subTotal = Number(document.querySelector('#subtotal').value);
    let checker = document.querySelector('#member').checked;
    let discount = 0;

    if (checker)
    {
        discount = 0.2 * subTotal;
    }

    subTotal -= discount;

    document.querySelector('#total').innerHTML = `$ ${subTotal.toFixed(2)}`;
}

document.querySelector('#getTotal').addEventListener('click', totalSpan);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */

let oddNumbers = numbersArray.filter((num) => {
    return (num % 2 !== 0);
})

/* Output Evens Only Array */

document.querySelector('#odds').innerHTML = oddNumbers;

let evenNumbers = numbersArray.filter((num) =>
{
    return (num % 2 === 0);
});
document.querySelector('#evens').innerHTML = evenNumbers;


/* Output Sum of Org. Array */

let sumNumbers = numbersArray.reduce((sum, number) =>
{
    return sum + number;
});

document.querySelector('#sumOfArray').innerHTML = sumNumbers;


/* Output Multiplied by 2 Array */

let mulNumbers = numbersArray.map(number => {
    return (number * 2);
});

document.querySelector('#multiplied').innerHTML = mulNumbers;



/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = mulNumbers.reduce((sum, number) => {
    return (sum + number);
})

document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;