brain = module.exports = function (type, animal, size) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.oxygen = 100;
    this.rest = 100;
    this.name = animal + "'s brain";
    this.description = this.name + ", used to control all processes. It is " + this.size + " item.";
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.2 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.2 * this.sizeModifier(this.size);
};
