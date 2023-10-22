// Week 3 - Day 2 - HW

// You will be working with this class
// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances


// class Cat {
//     constructor(name, age, breed, color){
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//         this.color = color;
//         }
//         catsound(){
//             console.log(`${this.name} makes this sound when hungry Meow`);
//             }
//         catspeed() {
//             console.log(`${this.name} Average speed is 5MPH `);
//             }
//         catspeed_2() {
//                 console.log(`${this.name} Average speed is 8MPH `);
//                 }
//         activities() {
//             console.log(`${this.name}  likes to jump on the table top`);
//         }    
//         activities_2() {
//             console.log(`${this.name}  likes to run away`);
//         }  
//     }
//     let catlab1 = new Cat("Fluffy", 5, "Persian", "White");
//     let catlab2 = new Cat("Mimi", 4, "Siamese", "Black");
//     console.log(catlab1);
//     catlab1 [catlab1.catsound(),catlab1.catspeed_2(),catlab1.activities_2()]
//     console.log(catlab2);
//     catlab2 [catlab2.catsound(),catlab2.catspeed(),catlab2.activities()]

// Constructors here is a class to work with
class Pirate {
    constructor(name, nickname, yearsActive) {
      this.name = name;
      this.nickname = nickname;
      this.yearsActive = yearsActive;
    }
  
    greeting() {
      console.log(`Ahoy ${this.name}`);
    }
  
    sail() {
      console.log(`${this.name} sets sail on the high seas, seeking adventure and treasure.`);
    }
  
    attack() {
      console.log(`attack a ship, and acquiring riches.`);
    }
  }
  
  // Instantiate two arrays of three pirates
  const jollyRoger = [
    new Pirate('Chaly', 'The Captain', 1981),
    new Pirate('Anne', 'The Pirate Queen', 1980),
    new Pirate('Jack', 'JSparor', 1979)
  ];
  
  const blackPearl = [
    new Pirate('Roberts', 'BigRob', 1989),
    new Pirate('Morgan', 'Morgan the Raider', 1992),
    new Pirate('Sam', 'The Observer', 1996)
  ];
  
//   // Loop over each array and print three properties of each pirate
  for (const pirate of jollyRoger) {
    console.log(`name: ${pirate.name} `);
    console.log(`nickname: ${pirate.nickname}`);
    console.log(`Years Active: ${pirate.yearsActive}`);
    console.log('================');
  }
  
  for (const pirate of blackPearl) {
    console.log(`name: ${pirate.name}`);
    console.log(`Nickname: ${pirate.nickname}`);
    console.log(`Years Active: ${pirate.yearsActive}`);
    console.log('============');
  }

