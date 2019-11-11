/* Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/* GameObject
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: 
  
*/
class GameObject {
  constructor(createdAt, name, dimensions) {
    this.createdAt = createdAt;
    this.name = name;
    this.dimensions = dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
    // this.name + "was removed from the game.";
  }
}
/* CharacterStats

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
  constructor(createdAt, name, dimensions, healthPoints) {
    super(createdAt, name, dimensions);
    this.healthPoints = healthPoints;
  }

  destroy() {
    super.destroy();
    console.log(this.name + ' was removed from the console.');
  }
  
  takeDamage() {
    return '<object name> took damage.';
    //this.name + " took damage.";
  }


}

/* HUMANOID
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
  constructor(createdAt, name, dimensions, healthPoints, team, weapons, language) {
    super(createdAt, name, dimensions, healthPoints);
    this.team = team;
    this.weapons = weapons;
    this.language = language;
  }
  destroy() {
    super.destroy();
    console.log(this.name + ' was removed from the console.');
  }
  takeDamage() {
    super.takeDamage();
    console.log(this.name + " took damage from the console.");
  }
  greet() {
    return this.name + " offers a greeting in " + this.language + ".";
    // '<object name> offers a greeting in <object language>.';
    // 
  }
}


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});



console.log(mage.createdAt); // Today's Date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.  
console.log(mage.takeDamage()); // Bruce took damage.
console.log(archer.greet()); // Lilith offers a greeting in Elvish.

