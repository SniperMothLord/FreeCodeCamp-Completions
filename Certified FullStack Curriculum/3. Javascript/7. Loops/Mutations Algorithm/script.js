function mutation(arr){
  const first = arr[0].slice().toLowerCase().split("");
  const second = arr[1].slice();

  for(const s_letter of second.toLowerCase()){
    if(first.includes(s_letter)){
      continue;
    }else{
      return false;
    }
    console.log(first);
  }
  return true;
}


mutation(["hello", "hey"])
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])