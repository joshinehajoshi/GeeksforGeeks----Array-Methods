// returns the index of first element which satisfies the condition

function indexFunction(item){
    return item%10==0;
}

let br = [1,2,3,4,10,10,100,1,2,3,0];
console.log("findIndex",br.findIndex(indexFunction));