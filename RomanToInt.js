function romanToInt(romanNumeral) {
    const romanToIntegerMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentSymbol = romanNumeral[i];
      const currentValue = romanToIntegerMap[currentSymbol];
      const nextSymbol = romanNumeral[i + 1];
      const nextValue = romanToIntegerMap[nextSymbol];
  
      if (nextValue > currentValue) {
        result += nextValue - currentValue;
        i++; 
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  

  
  console.log(romanToInt("XXV")); 
  
  