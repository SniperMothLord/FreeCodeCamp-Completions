function generatePassword(pw_length){
  let pw_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  password = "";
  for(let i = 0; i < pw_length; i++){
    let random_index = Math.round(Math.random()*(pw_chars.length-1));
    password += pw_chars[random_index];
  }
  return password;
}

let password = generatePassword(10);
console.log("Generated password: "+password);