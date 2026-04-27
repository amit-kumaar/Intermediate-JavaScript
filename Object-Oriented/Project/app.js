    // Create Dino Constructor
function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

class Dino{
    constructor(species,weight, height, diet, where,when,fact){
        this.species=species;
        this.weight=weight;
        this.height=height;
        this.diet=diet;
        this.where=where;
        this.when=when;
        this.fact=fact;
    }
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    compareWeight(human){
        const ratio=(this.weight / human.weight).toFixed(1);
        return `${this.species} weighs ${ratio}x compared to you!`;
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareHeight(human){
        const humanHeight=human.feet*12 + human.inches;
        const diff = Math.abs(this.height-humanHeight);
        return this.height>humanHeight
            ? `${this.species} is ${diff} inches taller than you!`
            : `You are ${diff} inches taller than ${this.species}!`;
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareDiet(human){
        return this.diet.toLowerCase() === human.diet.toLowerCase()
            ? `${this.species} shares your ${this.diet} diet!`
            : `${human.name} is a ${human.diet}, but ${this.species} is a ${this.diet}.`;
    }
}

    // Create Dino Objects
const dinos=[
    new Dino("Triceratops", 13600, 114, "herbavor", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh"),
    new Dino("Tyrannosaurus Rex", 17000, 144, "carnivor", "North America", "Late Cretaceous", "The largest known land predator"),
    new Dino("Anklyosaurus", 10500, 55, "herbavor", "North America", "Late Cretaceous", "Protected by dozens of bony plates and a club-like tail"),
    new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurasic", "The longest neck of any known dinosaur"),
    new Dino("Stegosaurus", 11600, 79, "herbavor", "North America", "Late Jurasic", "The largest of the Stegosaurs"),
    new Dino("Elasmosaurus", 10000, 55, "carnivor", "North America", "Late Cretaceous", "The longest neck of any known marine reptile"),
    new Dino("Pteranodon", 44, 20, "carnivor", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur."),
    new Dino("Pigeon", 0.5, 9, "herbavor", "World Wide", "Holocene", "All birds are Dinosaurs.")
]

    // Create Human Object
const human={
    name:'',
    feet:0,
    inches:0,
    weight:0,
    diet:''
};
    // Use IIFE to get human data from form
const getHumanData = (function(){
    return function(){
        human.name=document.getElementById('name').value;
        human.feet=parseInt(document.getElementById('feet').value);
        human.inches=parseInt(document.getElementById('inches').value);
        human.weight=parseInt(document.getElementById('weight').value);
        human.diet=document.getElementById('diet').value.toLowerCase();
    }
})();

    // Generate Tiles for each Dino in Array

    function generateTiles(){
        const grid = document.getElementById('grid');

        const allTiles=[...dinos];
        allTiles.splice(4,0,human);
        
        allTiles.forEach(creature=>{
            const div = document.createElement('div');
            div.classList.add('grid-item');

            if(creature === human){
                div.innerHTML=`
                <h3>${sanitize(human.name)}</h3>
                <img src ="images/human.png" alt="${sanitize(human.name)}">
                `;
            }
            else{
                const facts = [
                  creature.fact,
                  `${creature.species} lived in ${creature.where}.`,
                  `${creature.species} existed during the ${creature.when} period.`,
                  creature.compareWeight(human),
                  creature.compareHeight(human),
                  creature.compareDiet(human),
                ];
                const fact =
                  creature.species === "Pigeon"
                    ? "All birds are Dinosaurs."
                    : facts[Math.floor(Math.random() * facts.length)];

                const imgName = encodeURIComponent(creature.species.toLowerCase());
                div.innerHTML = `
                <h3>${creature.species}</h3>
                <img src="images/${imgName}.png" alt="${creature.species}">
                <p>${sanitize(fact)}</p>
            `;
            }

            grid.appendChild(div);
        })
    }
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", () => {
  const name = document.getElementById('name').value.trim();
  const feet = document.getElementById('feet').value;
  const inches = document.getElementById('inches').value;
  const weight = document.getElementById('weight').value;

  if (!name || !feet || !inches || !weight) {
    alert('Please fill in all fields before comparing!');
    return;
  }

  getHumanData();
  generateTiles();
  document.getElementById("dino-compare").style.display = "none";
});