ear = module.exports = function (type, animal, size, position, efficiency) {
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.position = position;
    this.efficiency = efficiency;
    this.name = animal + "'s " + this.position + " ear";
    this.description = this.name + ", used to hear stuff. It is " + this.size + " item.";
    this.maxHP = 10 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};