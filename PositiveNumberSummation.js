const positiveNumberSummation= arr =>{
    let sum=0;
arr.map(item=>{
    if(item>0){
           sum+=item;
        }
})
return sum;

}

const sum= positiveNumberSummation([2, -5, 10, -3, 7]);
console.log(sum);