function Animal(species) {
  this.species = species;
  this.eat = true;
}

Animal.prototype.walks = function () {
  return `A ${this.species} is walking`;
};

const Bear = new Animal("bear");

const Fish = new Animal("fish");

Fish.eat = false;

console.log(Bear.species);
console.log(Bear.eat);
console.log(Bear.walks());

// The prototype property is where inheritable props and methods are
console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Bear);
console.log(Fish);
