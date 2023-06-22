//expression: 7 + 2 * 3 + 2

function precedence(a , b) {
    if ((a === '*' || a === "/") && (b === '+' || b === '-')) return true;
    else return false;
}


function toPostfix(str) {
    let result = "";
    let arr = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] != '+' && str[i] != '-' && str[i] != '/' && str[i] != '*' && str[i] != ' ') result+= str[i];
        else if(str[i] != ' ') {
            if(arr.length === 0 || precedence(str[i] , arr[arr.length - 1])) {
                arr.push(str[i]);
            } else {
                while(arr.length > 0 && !precedence(str[i] , arr[arr.length - 1])) {
                    let curr = arr.pop();
                    result+=curr;
                }
                arr.push(str[i]);
            }
        }
    }

    while(arr.length > 0) {
        let curr = arr.pop();
        result+=curr;
    }
    return result;
}


function evaluate(str) {
    let result = 0;
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] >= '0' && str[i] <= '9')
    }
}
