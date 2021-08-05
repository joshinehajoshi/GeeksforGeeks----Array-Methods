//  flatten the input array element into a new array

let an = [1,2,3,4,5,[1],[2]];
function newA(x) {
    return [x*10];
}
console.log(an);
console.log("an",an.flatMap(newA));
console.log(an);