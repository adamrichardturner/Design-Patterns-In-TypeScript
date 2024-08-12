"use strict";
class Animal {
    constructor(age) {
        //this.name = name // this must now be assigned in the derived class instead
        this.age = age;
    }
    feed(food, amount) {
        console.log("Feeding " +
            this.name +
            " the " +
            this.constructor.name +
            " " +
            amount +
            " kg of " +
            food);
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
}
const CAT = new Cat("Cosmo", 8);
const DOG = new Dog("Rusty", 12);
CAT.feed("Fish", 0.1);
DOG.feed("Beef", 0.25);
