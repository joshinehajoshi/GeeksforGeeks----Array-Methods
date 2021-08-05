// flatten array

let newArr = [[1,2,3,4,[2,3,4,[4,5]]]]
console.log("newArr",newArr);
console.log("newArr",newArr.flat(1))
console.log("newArr",newArr.flat(2))
console.log("newArr",newArr.flat(3))
console.log("newArr",newArr.flat(Infinity))