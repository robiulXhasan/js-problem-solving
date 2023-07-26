const mostFrequent = (arr) => {
  let maxCount = 0;
  let frequentNumber;
  arr.map((item) => {
    let count = 0;
    arr.map((element) => {
      if (item === element) {
        count++;
      }
    });
    if (count > maxCount) {
      maxCount = count;
      frequentNumber=item;
    }
    
   
  });
  return frequentNumber;
};
const frequentNumber= mostFrequent( [3, 5, 2, 5, 3, 3, 1, 4, 5])
console.log(frequentNumber);