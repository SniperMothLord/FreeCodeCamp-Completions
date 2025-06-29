let books = [
  {
    title: "Burger Cook Book",
    authorName: "Burger Man",
    releaseYear: 2025
  },
  {
    title: "Burger Cook Book 2",
    authorName: "Burger Man",
    releaseYear: 2023
  },
  {
    title: "How to taste burgir",
    authorName: "Burger Man",
    releaseYear: 2024
  },
  {
    title: "Fantastic beasts and their wherebouts",
    authorName: "I dont remember",
    releaseYear: 2021
  },
  {
    title: "Tasty tasty sugar mommy",
    authorName: "SniperMothLord",
    releaseYear: 2024
  }
];

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }else{
    return 0;
  }
}

let filteredBooks = books.filter(book => book.releaseYear >= 2022);
console.log(filteredBooks);

filteredBooks.sort(sortByYear)
console.log(filteredBooks);

