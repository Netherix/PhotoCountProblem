function deleteNth(arr, n) {
    const myDict = new Map();
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      
      if (myDict.has(num)) {
        myDict.set(num, myDict.get(num) + 1);
      } else {
        myDict.set(num, 1);
      }
      if (myDict.get(num) <= n) {
        result.push(num);
      }
    }
    
    return result;
  }
  