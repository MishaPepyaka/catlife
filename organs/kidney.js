kidney = module.exports = function (type, animal, size, position) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.position = position;
    this.name = animal + "'s kidney";
    this.description = this.name + ", used to filter water. It is " + this.size + " item.";
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};