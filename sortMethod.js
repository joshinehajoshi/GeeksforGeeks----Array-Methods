let objarr = [{name:"neha",num:100},
                {name:"abc",num:60},
                {name:"xyz",num:45},
                {name:"ffd",num:23}];
function sorting(cur,prev) {
    return cur.num-prev.num
}

console.log(objarr.sort(sorting));



let aa = [2,6,633,111,2334,2,4];
function sortNum(a,b){
    return a-b;
}

console.log("aa",aa.sort(sortNum))