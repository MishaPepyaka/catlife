nose = module.exports = function (type, animal, size, efficiency) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.efficiency = efficiency;
    this.name = animal + "'s nose";
    this.description = this.name + ", used to find food and stuff. It is " + this.size + " item.";
    this.maxHP = 10 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};