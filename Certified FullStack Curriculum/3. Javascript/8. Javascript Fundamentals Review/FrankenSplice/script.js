function frankenSplice(arr1, arr2, index){
  const part1 = arr2.slice(0, index);
  const part2 = arr2.slice(index);
  return [...part1, ...arr1, ...part2];
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))