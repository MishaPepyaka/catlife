heart = module.exports = function (type, animal, size) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.name = animal + "'s heart";
    this.description = this.name + ", used to pump bloodstream. It is " + this.size + " item.";
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.1 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.1 * this.sizeModifier(this.size);
};