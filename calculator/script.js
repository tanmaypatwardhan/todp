//expression: 7 + 2 * 3 + 2

function precedence(a , b) {
    if ((a === '*' || a === "/") && (b === '+' || b === '-')) return true;
    else return false;
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '/' || char === '*';
}

function toPostfix(str1) {
    let str = str1.split(" ");
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



