import collection from "./collection.js"
import {stringify} from "./stringify.js" // You need the curly brackets if it's a function


console.log(collection)
console.log(typeof(collection[0].name))
console.log(document.getElementById("search").value)



for (let j = 0 ; j < collection.length ; j ++){
    const elementCard = `
    <div class = "flip-card" id = "heightCard${stringify(collection[j].name)}">
      <div class = "flip-card-inner">
        <div id = "${stringify(collection[j].name)}" class = "cardFront">
          <div class = "img">
              <img src="${collection[j].img}">
          </div>
          <div class = "content">
              <span>${collection[j].console}</span>
              <span>${collection[j].genre}</span>
              <h3>${collection[j].name}</h3>
              <span>Release : ${collection[j].release}</span>
              <p>${collection[j].synopsis}</p>
          </div>
        </div>

        <div id = "${stringify(collection[j].name)}Back" class = "cardBack">
          <div class = "img">
            <img src="${collection[j].img}">
          </div>
        </div>
      </div>
    </div>
    `
    document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend", elementCard)
}

window.onload = function(){
  for (let m = 0 ; m < collection.length ; m++){
    let height = document.getElementById(stringify(collection[m].name)).clientHeight
    console.log(height)
    document.getElementById(`heightCard${stringify(collection[m].name)}`).style.height = height+"px"
    document.getElementById(`${stringify(collection[m].name)}Back`).style.height = height + "px"
    document.getElementById(`${stringify(collection[m].name)}Back`).style.backgroundImage = `url("${collection[m].backImage}")`
    document.getElementById(`${stringify(collection[m].name)}Back`).style.backgroundSize = "100% 100%"
    document.getElementById(`${stringify(collection[m].name)}Back`).style.backgroundRepeat = "no-repeat"
    
  }
}



// -------------------------------------------------------------------------
const searchFor = () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
  
    for (let l = 0; l < collection.length; l++) {
      const element = document.getElementById("heightCard" + stringify(collection[l].name));
      // const elementBack = document.getElementById(stringify(collection[l].name + "Back"));
  
      if (searchValue === "" || collection[l].name.toLowerCase().includes(searchValue)) {
        element.style.display = "block";
        // elementBack.style.display = "block";
      } else {
        element.style.display = "none";
        // elementBack.style.display = "none";
      }
    }
  };
  
  document.getElementById("search").addEventListener("input", searchFor);