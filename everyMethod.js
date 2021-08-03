function checkEven(n) {
    if(n%2==0){
        return true;
    }
}

function everyMethod() {
    let arr = [1,2,3,4,5,6,7,8]
    return arr.every(checkEven);
}

let a = [2,4,6,8,0,1];
console.log("every()", a.every((b)=>(b+2)%2==0))

let b = [1,3,5,7,9,2];
console.log("every()1",b.every((x)=>(x+2)%2 !=0))