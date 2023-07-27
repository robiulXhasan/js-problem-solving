
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should contain at least two elements.";
    }
  
    let smallest=Infinity ;
    let secondSmallest=Infinity ;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    return secondSmallest;
  }
  
  const secondSmallestNumber = findSecondSmallest([5, 10, 2, 8, 3, 7]);
  console.log(secondSmallestNumber);
  