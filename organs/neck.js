neck = module.exports = function (type, animal, size, special) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.special = special;
    this.name = animal + "'s neck";
    this.description = this.name + ", may be with special part. It is " + this.size + " item.";
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.1 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.1 * this.sizeModifier(this.size);
};