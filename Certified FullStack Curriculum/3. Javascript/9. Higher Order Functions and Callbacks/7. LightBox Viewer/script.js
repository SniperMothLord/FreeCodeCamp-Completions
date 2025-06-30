const imageSrcs = [
  "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg",
  "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg",
  "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg"
]


const images = document.querySelectorAll(".gallery-item");
const closeButton = document.querySelector("#close-btn");
const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.querySelector("#lightbox-image")

console.log(images);

function showImage(index){
  console.log("this fires at index"+index)
  images.forEach((image, i) => {
    if(index == i){
      lightBox.style.display = "flex";
      lightBoxImg.src = imageSrcs[index];
      
    }
  })
}

function hideImage(){
  lightBox.style.display = "none";
}

lightBox.addEventListener("click", () => {
  hideImage();
})
closeButton.addEventListener("click", () => {
  hideImage();
})

images.forEach((image, index) => {
  image.addEventListener("click", () => showImage(index))
});