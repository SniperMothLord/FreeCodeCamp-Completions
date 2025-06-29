const itemList = document.querySelector(".item-list");
const hearts = itemList.querySelectorAll("button");
console.log(hearts)

function toggleHeart(index){
  if(hearts[index].classList.contains("filled")){
    hearts[index].innerHTML = "&#9825;";
    hearts[index].classList.toggle('filled');
  }else{
    hearts[index].innerHTML = "&#10084;";
    hearts[index].classList.toggle('filled');
  }
}

hearts.forEach((li, index) => {
  li.addEventListener('click', () => toggleHeart(index));
});
