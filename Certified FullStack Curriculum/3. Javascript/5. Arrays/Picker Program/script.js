let lunches = [];

function addLunchToEnd(lunches, lunch){
  lunches.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return lunches;  
}

function addLunchToStart(lunches, lunch){
  lunches.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches){
  if(lunches.length >= 1){
    let lunch_removed = lunches.pop();
    console.log(`${lunch_removed} removed from the end of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return lunches;
}

function removeFirstLunch(lunches){
  if(lunches.length >= 1){
    let lunch_removed = lunches.shift();
    console.log(`${lunch_removed} removed from the start of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return lunches;
}

function getRandomLunch(lunches){
  if(lunches.length >= 1){
    let lunch_select = Math.round(Math.random()*(lunches.length-1));
    console.log(`Randomly selected lunch: ${lunches[lunch_select]}`);
  }else{
    console.log("No lunches available.");
  }
}

function showLunchMenu(lunches){
  if(lunches.length < 1){
    console.log("The menu is empty.");
  }else{
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
}

removeFirstLunch(["Salad", "Eggs", "Cheese"])
getRandomLunch(["Salad", "Eggs", "Cheese"])