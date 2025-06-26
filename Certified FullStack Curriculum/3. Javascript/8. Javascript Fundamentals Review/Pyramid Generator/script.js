function pyramid(fill_char, height, isInverted){
  let result = ""
  for(let i = 0; i < height; i++){
    let fillableChars = isInverted ? 
      fill_char.repeat(((height-i)*2)-1)
      :fill_char.repeat((i*2)+1);
    let fillableEmpty = isInverted ?
      " ".repeat((i)) 
      :" ".repeat((height-i-1))
    result += "\n"+fillableEmpty+fillableChars;
  }
  result += "\n"
  console.log(result)
  return result;
}

pyramid("o", 4, false)
pyramid("p", 5, true)