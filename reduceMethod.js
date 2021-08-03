let arr = [1,2,3,4,5,6,7,8,9];
let arrnew = arr.reduce((a,b)=>a+b);
console.log(arr);
console.log(arrnew,"arrnew")


var arrr=[{name: "customer 1", sales: 500, location: "NY"},
         {name: "customer 1", sales: 200, location: "NJ"},
          {name: "customer 1", sales: 700, location: "NY"},
         {name: "customer 1", sales: 200, location: "ORD"},
         {name: "customer 1", sales: 300, location: "NY"}];
  
var totalSalesInNY = arrr.reduce((previousValue, currentValue, index, array) => {
    if (currentValue.location === "NY") {
        previousValue.sales =  previousValue.sales + Number(currentValue.sales);
    }
    return previousValue;

});
  
console.log(totalSalesInNY.sales); 