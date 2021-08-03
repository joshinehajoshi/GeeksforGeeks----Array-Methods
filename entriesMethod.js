let earr = ['a','b','c','d'];
console.log('earr',earr);
let x = earr.entries();
for(let [index,value] of earr.entries()){
    console.log(value);
}