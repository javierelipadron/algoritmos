// Define constants for the simulation
const MEMORY_SIZE = 100; // Size of the shared memory space
const NUM_ROUNDS = 1000; // Number of rounds to simulate

// Initialize shared memory
function initializeMemory() {
    return Array(MEMORY_SIZE).fill(null);
}

// Warrior class definition
class Warrior {
    constructor(name, attackStrategy, memorySize) {
        this.name = name;
        this.attackStrategy = attackStrategy;
        this.position = Math.floor(Math.random() * memorySize);
        this.isAlive = true;
    }

    // Execute attack strategy
    attack(memory) {
        const target = this.attackStrategy(this.position, memory.length);
        if (target >= 0 && target < memory.length) {
            memory[target] = 'ATTACKED';
        }
    }
}

// Example attack strategies
function randomAttack(position, memorySize) {
    return Math.floor(Math.random() * memorySize);
}

function linearAttack(position, memorySize) {
    return (position + 1) % memorySize;
}

// Simulate a single round
function simulateRound(memory, warrior1, warrior2) {
    // Each warrior attacks
    warrior1.attack(memory);
    warrior2.attack(memory);

    // Check if any warrior is defeated
    if (memory[warrior1.position] === 'ATTACKED') warrior1.isAlive = false;
    if (memory[warrior2.position] === 'ATTACKED') warrior2.isAlive = false;

    return {
        warrior1Alive: warrior1.isAlive,
        warrior2Alive: warrior2.isAlive
    };
}

// Simulate the game
function simulateGame(rounds) {
    let warrior1Wins = 0;
    let warrior2Wins = 0;

    for (let i = 0; i < rounds; i++) {
        const memory = initializeMemory();

        const warrior1 = new Warrior('Warrior 1', randomAttack, MEMORY_SIZE);
        const warrior2 = new Warrior('Warrior 2', linearAttack, MEMORY_SIZE);

        while (warrior1.isAlive && warrior2.isAlive) {
            const result = simulateRound(memory, warrior1, warrior2);
            if (!result.warrior1Alive) warrior2Wins++;
            if (!result.warrior2Alive) warrior1Wins++;
        }
    }

    return {
        warrior1Wins,
        warrior2Wins,
        probabilityWarrior1: (warrior1Wins / rounds) * 100,
        probabilityWarrior2: (warrior2Wins / rounds) * 100
    };
}

// Run the simulation
const results = simulateGame(NUM_ROUNDS);
console.log('Simulation Results:');
console.log(`Warrior 1 Wins: ${results.warrior1Wins}`);
console.log(`Warrior 2 Wins: ${results.warrior2Wins}`);
console.log(`Probability of Warrior 1 Winning: ${results.probabilityWarrior1.toFixed(2)}%`);
console.log(`Probability of Warrior 2 Winning: ${results.probabilityWarrior2.toFixed(2)}%`);
