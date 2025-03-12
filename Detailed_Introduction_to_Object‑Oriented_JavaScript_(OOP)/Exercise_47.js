// Code:
const AnimalClass = class {
constructor(species) {
this.species = species;
}
getSpecies() {
return this.species;
}
};
const animalInstance = new AnimalClass("Elephant");
console.log(animalInstance.getSpecies());