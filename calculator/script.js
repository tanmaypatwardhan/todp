
function precedence(a , b) {
    if ((a === "*" || a === "/") && (b === "+" || b === "-")) return true;
    else return false;
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '/' || char === '*';
}

function toPostfix(str) {
    let result = [];
    let arr = [];

    for(let i = 0; i < str.length; i++) {
        if(!isOperator(str[i])) result.push(str[i]);
        else {
            if(arr.length === 0 || precedence(str[i] , arr[arr.length - 1])) {
                arr.push(str[i]);
            } else {
                while(arr.length > 0 && !precedence(str[i] , arr[arr.length - 1])) {
                    let curr = arr.pop();
                    result.push(curr);
                }
                arr.push(str[i]);
            }
        }
    }

    while(arr.length > 0) {
        let curr = arr.pop();
        result.push(curr);
    }
    return result;
}



function evaluate(str) {
    let result = 0;
    let arr = [];

    for(let i = 0; i < str.length; i++) {
        if(!isOperator(str[i])) arr.push(parseFloat(str[i]));
        else {
            let num1 = arr.pop();
            let num2 = arr.pop();

            if(str[i] === '+') arr.push(num1 + num2);
            else if(str[i] === '-') arr.push(num2 - num1);
            else if(str[i] === '*') arr.push(num1 * num2);
            else arr.push(num2 / num1);
        }
    }
    return arr[0];
}



let expression = [];
let curr_string = "";
const buttons = document.querySelectorAll("button");

function validForExpression(str) {
    return str !== "AC" && str !== "C" && str !== "plus_minus" && str !== "equal" && str !== "point";
}

function isOperatorClass(name) {
    return name === "multiply" || name === "subtract" || name === "divide" || name === "add";
}

const map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    
}



const display_top = document.querySelector(".display_top");
const display_bottom = document.querySelector("display_bottom")
buttons.forEach(button => {
    button.addEventListener('click' , (e) => {
       
        let className = e.target.className;
        if(validForExpression(className) && !isOperatorClass(className)) {
            curr_string+=map[className];
        } else if(validForExpression(className) && isOperatorClass(className)) {
            expression.push(curr_string);
            curr_string = "";
            if(className === "multiply") expression.push("*");
            else if(className === "add") expression.push("+");
            else if(className === "subtract") expression.push("-");
            else expression.push("/");
        } else if(className === "equal") {
            expression.push(curr_string);
            let num = evaluate(toPostfix(expression));
            
            expression = [];
            curr_string = "";
            console.log(expression);
        }
    });
});







