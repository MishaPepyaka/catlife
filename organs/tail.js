tail = module.exports = function (type, animal, size, length, special) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.length = length;
    this.special = special;
    this.name = animal + "'s tail";
    this.description = this.name + ", may be with special part. It is " + this.size + " item.";
    this.maxHP = 15 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};