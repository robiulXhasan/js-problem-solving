function findTwoNumbers(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left < right) {
      const currentSum = array[left] + array[right];
  
      if (currentSum === target) {
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
  
  const resultIndices = findTwoNumbers([1, 3, 6, 8, 11, 15], 14);
  console.log(resultIndices);
  