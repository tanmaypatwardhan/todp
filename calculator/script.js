
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
    point: "."
    
}



const display_top = document.querySelector(".display_top");
const display_bottom = document.querySelector(".display_bottom");
let dot = false;

function display(string, expression) {
    let result = "";
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === "*") {
            result+=("×" + " ");
        } else if(expression[i] === "/") {
            result +=("÷" + " ");
        } else  {
            result+=(expression[i] + " ");
        }
       
    }

    result += (string + " ");
    return result;
   
}


buttons.forEach(button => {
    button.addEventListener('click' , (e) => {
        let className = e.target.className;
        if((validForExpression(className) && !isOperatorClass(className)) || (className === "point" && !dot)) {
            if(className === "point") dot = true
            curr_string+=map[className];     
            display_top.textContent = display(curr_string, expression);  
            
        } else if(validForExpression(className) && isOperatorClass(className)) {
            expression.push(curr_string);
            dot = false;   
            curr_string = "";
            if(className === "multiply") {          
                expression.push("*");
            } else if(className === "add") {    
                expression.push("+");
            } else if(className === "subtract") {
                expression.push("-");
            } else {
                expression.push("/");
            } 

            display_top.textContent = display(curr_string, expression);
            


        } else if(className === "equal") {
            dot = false;
            expression.push(curr_string);
            let num = evaluate(toPostfix(expression));
            if(num === Infinity) {
                display_bottom.textContent = "Invalid";
            } else {
                num = num.toFixed(2).replace(/\.00$/, '');
                display_bottom.textContent = num;
                curr_string = num;
            }
            
            expression = [];
            
            
        } else if(className === "AC") {
            dot = false;
            display_top.textContent = "";
            display_bottom.textContent = "";
            curr_string = "";
            expression = [];
        } else if(className === "C") {
            if(dot) dot = false;
            if(curr_string.length > 0) curr_string = "";
            else expression.pop();

            if(display_bottom.textContent !== "") {
                curr_string = "";
                display_bottom.textContent = "";
            } 
            
            display_top.textContent = "";
            for(let i = 0; i < expression.length; i++) {
                if(expression[i] === "*") {
                    display_top.textContent+=("×" + " ");
                } else if(expression[i] === "/") {
                    display_top.textContent +=("÷" + " ");
                } else  {
                    display_top.textContent+=(expression[i] + " ");
                }
            }

        } else if(className === "plus_minus") {
            if(curr_string[0] !== "-") curr_string = "-" + curr_string;
            else curr_string = curr_string.substring(1);
            display_top.textContent = display(curr_string, expression);
        } 

        
    });
});







