abstract class Animal {
  abstract name: string
  age: number

  constructor(age: number) {
    //this.name = name // this must now be assigned in the derived class instead
    this.age = age
  }

  feed(food: string, amount: number): void {
    console.log(
      "Feeding " +
        this.name +
        " the " +
        this.constructor.name +
        " " +
        amount +
        " kg of " +
        food
    )
  }
}

class Cat extends Animal {
  name: string
  constructor(name: string, age: number) {
    super(age)
    this.name = name
  }
}

class Dog extends Animal {
  name: string
  constructor(name: string, age: number) {
    super(age)
    this.name = name
  }
}

const CAT = new Cat("Cosmo", 8)
const DOG = new Dog("Rusty", 12)
CAT.feed("Fish", 0.1)
DOG.feed("Beef", 0.25)
