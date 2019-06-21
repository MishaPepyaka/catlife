hand = module.exports = function(animal, size, position, claws){
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.position = position;
    this.claws = claws;
    this.name = animal + "'s " + this.position + " hand";
    this.description = this.name + ", used to grab or attack. It is " + this.size + " item.";
    this.maxHP = 12;
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.1 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.1 * this.sizeModifier(this.size);
};