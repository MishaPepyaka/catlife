arm = module.exports = function (type, animal, size, position, liftPower, items) {
    this.type = type;
    this.items = items;
    this.animal = animal;
    this.size = size;
    this.position = position;
    this.liftPower = liftPower;
    this.name = animal + "'s " + this.position + " arm";
    this.description = this.name + ", used to manipulate with items. It is " + this.size + " item.";
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.2 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.2 * this.sizeModifier(this.size);
};