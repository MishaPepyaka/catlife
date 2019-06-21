pelvis = module.exports = function (type, animal, size, special, items) {
    this.type = type;
    this.items = items;
    this.animal = animal;
    this.size = size;
    this.special = special;
    this.name = animal + "'s pelvis";
    this.description = this.name + ", legs and tail sticks to it. It is " + this.size + " item.";
    this.maxHP = 40 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};