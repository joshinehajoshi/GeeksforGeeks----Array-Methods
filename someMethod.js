function checkEven(n) {
    if(n%2==0){
        return true;
    }
}

function someMethod() {
    let arr = [1,2,3,4,5,6,7,8]
    return arr.every(checkEven);
}

let a1 = [2,4,6,8,0];
console.log("some()", a1.some((b)=>(b+2)%2==0))

let b1 = [1,3,5,7,9];
console.log("some()1",b1.some((x)=>(x+2)%2 !=0))