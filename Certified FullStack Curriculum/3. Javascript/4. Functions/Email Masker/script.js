function maskEmail(email){
  let at_index = email.indexOf("@");
  let maskable = email.slice(1, at_index-1);
  let mask = "*".repeat(maskable.length);
  let masked_email = email[0]+mask+email.slice(at_index-1);
  return masked_email;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email))