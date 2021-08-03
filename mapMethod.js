let arrmap = [1,2,3,4,5,6,7,8,9];
let newMap = arrmap.map(n => n*2);
console.log("map",newMap);

let arrmap1 = [10,20,30,40,50];
console.log("map1", arrmap1.map(item => item*10))

let arrmap2 = [{name:"neha", branch:"ece",marks:95},
            {name:"madhu", branch:"ece",marks:40},
            {name:"shailja", branch:"mech",marks:67}];
console.log("arrmap2",arrmap2);

function passing(arrmap2) {
    return arrmap2.map(function(item,index,array){
        arrmap2.pass = 
            (arrmap2.marks<50) ? true : false;
        return arrmap2;
    });
    
}

console.log(passing(arrmap2));
