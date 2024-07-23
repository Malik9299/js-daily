"use strict";
class Singleton {
    static getInstance() {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();
const isSameInstance = singletonInstance1 === singletonInstance2;
console.log(`Is singletonInstance1 and singletonInstance2 the same instance?  ${isSameInstance}`);
// Is singletonInstance1 and singletonInstance2 the same instance?  true
// Now remove if (this.instance === null) { condition and run again
// log will
// Is singletonInstance1 and singletonInstance2 the same instance?  false
