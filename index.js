// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })

// Или 

fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => console.log(response));


// Теперь с использованием JSON

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(res => console.log(res.message)); // res.message - обращение к 