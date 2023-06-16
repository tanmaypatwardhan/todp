const num = Math.floor(Math.random() * 3);
console.log(num);

function add7(num) {
    return num + 7;
}

function multiply(num1 , num2) {
    return num1 * num2;
}

function capitalize(str) {
    return str.slice(0 , 1).toUpperCase() + str.slice(1).toLowerCase();
}

function lastLetter(str) {
    return str.slice(-1);
}

