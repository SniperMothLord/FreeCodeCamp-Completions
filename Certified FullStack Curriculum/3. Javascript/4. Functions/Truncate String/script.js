function truncateString(sentence, sentence_length){
  if(sentence.length > sentence_length){
    return sentence.slice(0, sentence_length)+"...";
  }
  return sentence;
}

let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(result);