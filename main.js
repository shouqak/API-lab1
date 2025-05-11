let container = document.getElementById("container");

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    data.results.map((item) => {
      let card = document.createElement("div"); 
      card.classList.add("card"); 

      let text = document.createElement("h4");
      let img = document.createElement("img");

      text.innerText = item.name;
      img.src = item.image;

  card.appendChild(text);
  card.appendChild(img);
    
      container.appendChild(card);
    });
  });