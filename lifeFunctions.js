module.exports = {
    initParams: function (name, sex, age, color) {
        this.name = name;
        this.oxygenMax = 100 * this.sizeModifier(this.size);
        this.oxygen = this.oxygenMax;
        this.nutrientsMax = 100 * this.sizeModifier(this.size);
        this.nutrients = this.nutrientsMax;
        this.energyMax = 100 * this.sizeModifier(this.size);
        this.energy = this.energyMax;
        this.happinesMax = 100 * this.sizeModifier(this.size);
        this.happines = this.happinesMax;
        this.doing = 'idle';
        this.sex = sex; // 'male' or 'female'
        this.age = age;
        this.color = color;
        this.eConsumption = 0;
        this.alive = true;
        this.countEnergyConsumption(this);
    },
    findOrgansByName: function (name, obj) {
        var out = [];
        var organs = obj.organs || obj.items || [], match;
        for (var i = 0; i < organs.length; i++) {
            if (organs[i].type == name) {
                out.push(organs[i]);
            } else if (organs[i].items) {
                match = this.findOrgansByName(name, organs[i]);
                if (match.length) out = out.concat(match);
            }

        }
        return out;
    },
    findOrganByName: function (name, obj) {
        var result = this.findOrgansByName(name, obj);
        return result[0];
    },
    countEnergyConsumption: function (obj) {
        for (var i in obj) {
            if (i.energyConsumption) {
                this.eConsumption += i.energyConsumption;
            } else if (i.items) {
                for (var j = 0; j < i.items.length; j++) {
                    this.countEnergyConsumption(i.items[j]);
                }
            }
        }
    }
    ,
    idle: function () {
        if (this.energy < 1) this.exhausting();
        if (this.energy < this.energyMax) {
            this.energy++;
            if (this.energy > this.energyMax) this.energy = this.energyMax;
            this.nutrients--;
        }
    }
    ,
    chew: function () {
        var thisJaw, thisStomach;
        if (this.alive) {
            if (this.energy < 1) this.exhausting();
            if ((thisJaw = this.findOrganByName('jaw', this)) && (thisStomach = this.findOrganByName('stomach', this))) {//Проверяем есть ли рот и желудок/
                this.nutrients++;
                if (this.nutrients > this.nutrientsMax) this.nutrients = this.nutrientsMax;
                this.happines++;
                if (this.happines > this.happinesMax) this.happines = this.happinesMax;
                this.energy -= thisJaw.energyConsumption;
                this.energy -= thisStomach.energyConsumption;
            }
        }
        else {
            console.log("DEAD ANIMAL CAN'T DO STUFF");
        }
    }
    ,
    exhausting: function () {
        if (this.nutrients > 0) {
            this.energy++;
            if (this.energy > this.energyMax) this.energy = this.energyMax;
            this.nutrients--;
            this.happines--;
        } else this.energy--;
        if (this.energy < 0 && this.nutrients < 0) this.alive = false;
    }
    ,
    depression: function () {
        this.happines--;
        if (Math.random() < 0.5) this.findFood(); else this.findPlay();
    }
    ,
    findFood: function () {
        var thisEye = this.findOrganByName('eye', this);
        var thisNose = this.findOrganByName('nose', this);
        var thisEar = this.findOrganByName('ear', this);
        var thisBrain = this.findOrganByName('brain', this);
        this.energy -= thisEye.energyConsumption * 2;
        this.energy -= thisNose.energyConsumption;
        this.energy -= thisEar.energyConsumption * 2;
        this.energy -= thisBrain.energyConsumption;
        this.happines--;
        this.eat({value: 1});
    }
    ,
    rest: function () {
        var thisBrain = this.findOrganByName('brain', this);
        this.energy -= thisBrain.energyConsumption / 2;
        this.idle();
        this.idle();
    }
    ,
    findPlay: function () {
        var thisEye = this.findOrganByName('eye', this);
        var thisNose = this.findOrganByName('nose', this);
        var thisEar = this.findOrganByName('ear', this);
        var thisBrain = this.findOrganByName('brain', this);
        this.energy -= thisEye.energyConsumption * 2;
        this.energy -= thisNose.energyConsumption;
        this.energy -= thisEar.energyConsumption * 2;
        this.energy -= thisBrain.energyConsumption;
        this.play();
    }
    ,
    play: function () {
        var thisPaw, thisLeg;
        if ((thisPaw = this.findOrganByName('paw', this)) && (thisLeg = this.findOrganByName('leg', this))) {//Проверяем есть ли ноги или лапы/
            this.happines += 5;
            if (this.happines > this.happinesMax) this.happines = 100;
            this.energy -= thisPaw.energyConsumption * 4;
            this.energy -= thisLeg.energyConsumption * 4;
        }
    }
    ,
    eat: function (who) {
        var thisJaw, thisStomach;
        if ((thisJaw = this.findOrganByName('jaw', this)) && (thisStomach = this.findOrganByName('stomach', this))) {//Проверяем есть ли рот и желудок/
            who.value--;
            this.chew();
        }
    }
    ,
    doLive: function () {
        if (this.energy < 2) this.exhausting();
        if (this.happines < 2) this.depression();
        if (this.alive) {
            this.happines--;
            var energyNeed = this.energyMax / this.energy;
            var nutrientNeed = this.nutrientsMax / this.nutrients;
            var happinesNeed = this.happinesMax / this.happines;
            var needMost = Math.min(energyNeed, nutrientNeed, happinesNeed);
            var thisBrain = this.findOrganByName('brain', this);
            this.energy -= thisBrain.energyConsumption;
            switch (needMost) {
                case energyNeed:
                    this.rest();
                    break;
                case nutrientNeed:
                    this.findFood();
                    break;
                case happinesNeed:
                    this.findPlay();
                    break;
            }
            this.age++;
            this.energy -= this.eConsumption;
        }
        else {
            console.log("DEAD ANIMAL CAN'T DO STUFF");
        }
    }
    ,
}
;
