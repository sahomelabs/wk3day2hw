class Pirate {
    constructor(name, rank, plunder) {
        this.name = name;
        this.rank = rank;
        this.plunder = plunder;
    }

    greet() {
        return `Ahoy, I be ${this.name} the ${this.rank}!`;
    }

    attack() {
        return `${this.name} is attacking with a plunder of ${this.plunder} gold doubloons!`;
    }

    sail(destination) {
        return `${this.name} is setting sail for ${destination}!`;
    }
}

// Instantiate two arrays of pirates
const jollyRoger = [
    new Pirate("Captain Hook", "Captain", 1000),
    new Pirate("Smee", "Cabin Boy", 50),
    new Pirate("Blackbeard", "First Mate", 5000)
];

const blackPearl = [
    new Pirate("Jack Sparrow", "Captain", 3000),
    new Pirate("Barbossa", "First Mate", 1500),
    new Pirate("Elizabeth Swann", "Navigator", 800)
];

// Loop over each array and print three properties of each pirate
for (const pirates of [jollyRoger, blackPearl]) {
    for (const pirate of pirates) {
        console.log(`${pirate.greet()} ${pirate.attack()} ${pirate.sail('Tortuga')}`);
        console.log();
    }
}
