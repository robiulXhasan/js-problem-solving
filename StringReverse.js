const MakeReverse = str =>{
    const strLength= str.length;
    let reverseString=""
    for(let i=strLength-1; i>=0; i--){
    
        reverseString+=str[i];  
       
    }
    return reverseString;
}

const reverseString= MakeReverse("hello world")
console.log(reverseString);