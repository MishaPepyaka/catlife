lung = module.exports = function (type, animal, size, position) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.position = position;
    this.name = animal + "'s lung";
    this.description = this.name + ", used to add oxygen in blood. It is " + this.size + " item.";
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};