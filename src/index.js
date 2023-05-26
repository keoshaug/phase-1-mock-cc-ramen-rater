const API = "http://localhost:3000/ramens";


fetch(API)
.then((res) => res.json())
.then(renderRamens);


function renderRamens(ramens) {
    ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
    const ramenMenuDiv = document.getElementById("ramen-menu");
    const ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;
    ramenMenuDiv.append(ramenImage);
}