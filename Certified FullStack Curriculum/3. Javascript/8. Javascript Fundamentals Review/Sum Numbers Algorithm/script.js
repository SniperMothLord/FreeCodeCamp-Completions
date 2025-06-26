function sumAll(arr){
  let start = arr[0] < arr[1] ? arr[0] : arr[1];
  let end = arr[0] < arr[1] ? arr[1] : arr[0];

  return ((end + start)/2)*(end - start +1);
  
}

let result = sumAll([1, 4]);
console.log(result)