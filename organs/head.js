head = module.exports = function (type, animal, size, special, items) {
    this.type = type;
    this.items = items;
    this.animal = animal;
    this.size = size;
    this.special = special;
    this.name = animal + "'s head";
    this.description = this.name + ", contains brain. It is " + this.size + " item.";
    this.maxHP = 50 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};