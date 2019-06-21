jaw = module.exports = function (type, animal, size, special, liftPower) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.special = special;
    this.liftPower = liftPower;
    this.name = animal + "'s jaw";
    this.description = this.name + ", may be with special part. It is " + this.size + " item.";
    this.maxHP = 10 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};