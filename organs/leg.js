leg = module.exports = function (type, animal, size, position, wSpeed, rSpeed, items) {
    this.type = type;
    this.items = items;
    this.animal = animal;
    this.size = size;
    this.wSpeed = wSpeed;
    this.rSpeed = rSpeed;
    this.position = position;
    this.name = animal + "'s " + this.position + " leg";
    this.description = this.name + ", used to move animal. It is " + this.size + " item.";    this.maxHP = 30 * this.sizeModifier(this.size);
    this.maxHP = 20 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.2 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.2 * this.sizeModifier(this.size);
};