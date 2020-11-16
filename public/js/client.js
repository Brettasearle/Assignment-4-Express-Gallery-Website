

fetch(`${window.location.origin}/api/v0/gallery`)
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data)
  let outputHTML = "";
  
  const gallery = document.querySelector(".row");
  
  data.forEach(function(ski){
    console.log(ski)
    outputHTML += `<div class="col-4 col-6-medium col-12-small">
    <a href="#" class="image fit"><img src="./image-op/photo-${ski.id}.webp" alt="${ski.title}"></a>
    <figcaption>${ski.credit}</figurecaption>
    </div>`;
    gallery.innerHTML = outputHTML;
    
  });
})

