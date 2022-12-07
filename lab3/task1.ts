//9
//2
/*
Дано число. Определить, является ли число степенью числа 2.
Например:
n = 1. True
n = 16. True
n = 3. False
*/
function isDegreeOfTwo(n:number){ 
    if(n%2 !== 0){
        return false;
    }
    let d: number = 1;
    while(d < n){
        d<<=1;
    }
    return d===n;
}

console.log(isDegreeOfTwo(1));
console.log(isDegreeOfTwo(3));
console.log(isDegreeOfTwo(16));
