/**
 * Created by mishunya on 19.05.16.
 */
var apply = function(a, b){
    for(var i in b){
        a[i] = b[i];
    }
    return a;
};

var observableMethods = module.exports = {
    on: function(eventName, fn){

        if(!('listeners' in this))
            this.listeners = {};

        var listeners = this.listeners;
        if(!(eventName in listeners))
            listeners[eventName] = [];

        listeners[eventName].push(fn);
    },
    fire: function(eventName){
        if('listeners' in this){
            var listeners = this.listeners[eventName], i;
            if(listeners)
                for(i = 0; i < listeners.length ; i++)
                    listeners[i].apply(this, [].slice.call(arguments,1));
        }
    }
};

var makeObservable = function(constructor){
    apply(constructor.prototype, observableMethods);
};