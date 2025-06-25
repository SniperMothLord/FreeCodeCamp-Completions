let fortune1 = "You feel quite horny today i must say";
let fortune2 = "The weather will be horrible tomorrow";
let fortune3 = "I dont know what the fuck is going on";
let fortune4 = "Why the fuck you are doing this when you know you could be doing some more advanced stuff?";
let fortune5 = "It woudl be wise to avoid color pink today";

let fortuneList = [fortune1, fortune2, fortune3, fortune4, fortune5];

let randomNumber = Math.round((5 * Math.random())-1) + 1;

let selectedFortune = fortuneList[randomNumber-1];

console.log(selectedFortune);