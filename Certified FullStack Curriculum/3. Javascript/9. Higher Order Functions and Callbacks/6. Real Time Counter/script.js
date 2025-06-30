const textField = document.getElementById("text-input");
const charCountOutput = document.getElementById("char-count");


textField.addEventListener("input", () => {
  let charCount = textField.value.length
  
  if(charCount < 50){
    charCountOutput.classList.remove("warning");
    charCountOutput.textContent = `Character Count: ${charCount}/50`;
  }else if (charCount == 50){
    charCountOutput.textContent = `Character Count: ${charCount}/50`;
    charCountOutput.classList.add("warning");
  }else{
    textField.value = textField.value.slice(0, 50);
  }
})