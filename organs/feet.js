feet = module.exports = function(animal, size, orientation, claws){
    this.type = type;
    this.animal = animal;
    this.size = size;
    this.orientation = orientation;
    this.claws = claws;
    this.name = animal + "'s " + this.position + " " + this.orientation + " feet";
    this.description = this.name + ", used to step. It is " + this.size + " item.";
    this.maxHP = 12;
    this.HP = this.maxHP;
    this.wounds = [];
    this.energyConsumption = 0.1 * this.sizeModifier(this.size);
    this.oxygenConsumption = 0.1 * this.sizeModifier(this.size);
};