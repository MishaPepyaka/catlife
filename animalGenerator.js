var sizeModifier = function (size) {
    switch (size) {
        case 'tiny' :
            return 0.5;
        case 'small':
            return 1;
        case 'normal':
            return 1.5;
        case 'big':
            return 2;
        case 'huge':
            return 2.5;
        default :
            return 1;
    }
};
var organPrototype = {
    sizeModifier: sizeModifier
};

var Animal = function (cfg) {
    this.organs = cfg.map(function (organ) {
        return createOrgan(organ);
    });
};
var fs = require('fs');
var lifeFunctions = require('./lifeFunctions.js');
Animal.prototype = lifeFunctions;
Animal.prototype.sizeModifier = sizeModifier;

function createOrgan(cfg) {
    var type = cfg.type;

    var fs = require('fs');
    var organConstructor = require('./organs/'+type+'.js');
    var Cls = function(){};
    Cls.prototype = organPrototype;
    var gov = new Cls();
    organConstructor.apply(gov, organConstructor.toString().match(/\(([^)]*)/)[0].substr(1).split(',').map(function (el) {
        return el.trim();
    }).map(function (argName) {
        return cfg[argName];
    }));
    if (cfg.items) gov.items = cfg.items.map(createOrgan);
    return gov;
}

animalConstructor = module.exports = function (animalType, animalName){
    var fs = require('fs');
    var animalConstructor = require('./animals/'+animalName+'.js');
    //newAnimal = addOrgan(animalConstructor, newAnimal);
    return new Animal(animalConstructor)
};
debugger;
var testcat = animalConstructor('cat', 'cat');
testcat.initParams('Vasily', 'male', '4', 'red');


testcat.idle();
testcat.chew();


console.log(JSON.stringify(testcat,null,2));
setInterval(function () {
    var catage=testcat.age/360;
    if(testcat.alive) {
        testcat.doLive();
        console.log(catage, testcat.nutrients, testcat.energy, testcat.happines);
    } else console.log('Cat is dead, baby. Cat is dead. His age is '+catage)
},10);
