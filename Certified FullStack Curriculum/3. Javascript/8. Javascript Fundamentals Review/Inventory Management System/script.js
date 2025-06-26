let inventory = [];

function findProductIndex(productName){
  let index = 0;
  for(let item of inventory){
    if(productName.toLowerCase() == item.name.toLowerCase()){
      return index;
    }
    index++;
  }
  return -1;
}

function addProduct(product){
  let productQueryIndex = findProductIndex(product.name);
  product.name = product.name.toLowerCase();
  if(productQueryIndex == -1){
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }else{
    inventory[productQueryIndex].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  }
}
function removeProduct(productName, toBeRemoved){
  let productIndex = findProductIndex(productName);
  if(productIndex != -1){
    let remainingProductCount = inventory[productIndex].quantity - toBeRemoved;
    if(remainingProductCount > 0){
      console.log(`Remaining ${productName.toLowerCase()} pieces: ${remainingProductCount}`);
      inventory[productIndex].quantity = remainingProductCount;
    }else if(remainingProductCount == 0){
      inventory.splice(productIndex, 1);
    }else if(remainingProductCount <= 0){
      console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[productIndex].quantity}`);
    }
  }else{
    console.log(`${productName.toLowerCase()} not found`);
  }
}


addProduct({name: "FLOUR", quantity: 20})
removeProduct("FLOUR", 5)
removeProduct("FLOUR", 5)
removeProduct("FLOUR", 5)

removeProduct("FLOUR", 10)