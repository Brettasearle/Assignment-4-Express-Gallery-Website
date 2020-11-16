import {ski} from "../../../gallery.js";
// const ski = require('../../../gallery');
console.log(ski);


let outputHTML = "";

const gallery = document.querySelector(".row");

ski.forEach(function(ski){
  console.log(ski)
  outputHTML += `<div class="col-4 col-6-medium col-12-small">
  <a href="#" class="image fit"><img src="${ski.imgpath()}.webp" alt="${ski.title}"></a>
  <figcaption>${ski.credit}</figurecaption>
  </div>`;
  gallery.innerHTML = outputHTML;
  
});