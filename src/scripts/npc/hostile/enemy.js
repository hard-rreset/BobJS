class Enemy {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target} and deals ${this.damage} damage.`);
    }

    takeDamage(amount) {
        console.log(`${this.name} takes ${amount} damage.`);
    }
}

module.exports = Enemy;
