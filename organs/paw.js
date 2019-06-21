paw = module.exports = function(type, animal, size, position, claws){
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.position = position;
    this.claws = claws;
    this.name = animal + "'s " + this.position + " paw";
    this.description = this.name + ", used to step or attack by animal. It is " + this.size + " item.";
    this.maxHP = 10 * this.sizeModifier(this.size);
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.05 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.05 * this.sizeModifier(this.size);
};