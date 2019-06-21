/**
 * Created by mishunya on 19.05.16.
 */
/**
 * Created by smn on 18.05.2016.
 */
function Model() {
}

Model.prototype.calculate = function (a, b) {
    var fs = require('fs');
    var animalConstructor = require('./animalGenerator.js');
    var TestKitty = animalConstructor('cat', 'cat');
};

function View() {
    this.me = this;
};
View.prototype.displayresults = function (a) {
    console.log(JSON.stringify(a,null,2));
};

function controller() {
    this.myModel = new Model();
    this.myView = new View();

    this.myView.displayresults(TestKitty);
}
controller();

