stomach = module.exports = function (type, animal, size) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.name = animal + "'s stomach";
    this.description = this.name + ", used to gain nutration. It is " + this.size + " item.";
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};