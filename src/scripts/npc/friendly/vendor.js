class Vendor {
    constructor(name, inventory) {
        this.name = name;
        this.inventory = inventory;
    }

    getName() {
        return this.name;
    }

    getInventory() {
        return this.inventory;
    }

    addItem(item) {
        this.inventory.push(item);
    }

    removeItem(item) {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }
}
