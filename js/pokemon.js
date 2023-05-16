const pokemonContainer = document.querySelector(".pokemon-container");
console.log(pokemonContainer);
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");
const siguiente1 = document.getElementById("siguiente1");
const anterior1 = document.getElementById("anterior1");

let ofset = 1;
let limit = 9;

anterior.addEventListener("click", ()=>{
    if(ofset!= 1){
        ofset-=9;
        removeChildNodes(pokemonContainer);
        fetchpokemonss(ofset, limit);
    }
})

siguiente.addEventListener("click", ()=>{
    
        ofset+=9;
        removeChildNodes(pokemonContainer);
        fetchpokemonss(ofset, limit);
    
})
/******paginacion abajo */

anterior1.addEventListener("click", ()=>{
    if(ofset!= 1){
        ofset-=9;
        removeChildNodes(pokemonContainer);
        fetchpokemonss(ofset, limit);
    }
})

siguiente1.addEventListener("click", ()=>{
    
        ofset+=9;
        removeChildNodes(pokemonContainer);
        fetchpokemonss(ofset, limit);
    
})




function fetchpokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createpokemon(data);
    })
}


function fetchpokemonss(ofset, limit){
    for(let i =ofset; i< ofset + limit; i++){
        fetchpokemon(i);
    }
}



function createpokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("pokemon-block");
    card.classList.add("col-12");
    card.classList.add("col-md-6");
    card.classList.add("col-lg-3");

    const spritContainer = document.createElement("div");
    spritContainer.classList.add("image-container");
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
    spritContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.classList.add("numero");

    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name

    card.appendChild(spritContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);


}


function removeChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

fetchpokemonss(ofset, limit);