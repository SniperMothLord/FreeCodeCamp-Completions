function chunkArrayInGroups(arr, chunkSize){
  let chunked = [];
  for(let i = 0; i < arr.length; i += chunkSize){
    chunked.push(arr.slice(i, i+chunkSize));
  }
  return chunked;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2)