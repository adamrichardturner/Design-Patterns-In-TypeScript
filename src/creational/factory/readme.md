# Factory Design Pattern in TypeScript

This README provides an overview of the Factory Design Pattern in TypeScript with examples based on the article from [sbcode.net](https://sbcode.net/typescript/factory/).

## Introduction

The Factory Design Pattern introduces an abstraction layer between object creation and its usage. This pattern is particularly useful when the type of object to be created isn't known until runtime, allowing for dynamic object creation based on logic or user input.

## Terminology

- **Concrete Creator**: The class or method that requests the creation of an object.
- **Product Interface**: Defines the methods and properties that the product (object) must implement.
- **Creator**: The factory class responsible for creating objects.
- **Concrete Product**: The actual object created by the factory.

## Example 1: Basic Factory Pattern

In this example, the factory creates products based on a string input.

### Implementation

```typescript
interface IProduct {
  name: string
}

class ConcreteProduct implements IProduct {
  name = ""
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super()
    this.name = "ConcreteProductA"
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super()
    this.name = "ConcreteProductB"
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super()
    this.name = "ConcreteProductC"
  }
}

class Creator {
  static createObject(someProperty: string): IProduct {
    if (someProperty === "a") {
      return new ConcreteProductA()
    } else if (someProperty === "b") {
      return new ConcreteProductB()
    } else {
      return new ConcreteProductC()
    }
  }
}

// The Client
const product = Creator.createObject("b")
console.log(product.name) // Output: ConcreteProductB
```

## Example 2: Factory Use Case with Chairs

In this example, a factory is used to create different types of chairs based on user input.

### Chair Interface

```typescript
import { dimension } from "./dimension"

interface IChair {
  height: number
  width: number
  depth: number
  getDimensions(): dimension
}
```

### Chair Factory

```typescript
import SmallChair from "./small-chair"
import MediumChair from "./medium-chair"
import BigChair from "./big-chair"
import IChair from "./chair"

export default class ChairFactory {
  static getChair(chair: string): IChair {
    if (chair == "BigChair") {
      return new BigChair()
    } else if (chair == "MediumChair") {
      return new MediumChair()
    } else {
      return new SmallChair()
    }
  }
}
```

### Chair Implementations

```typescript
import Chair from "./chair"

export default class SmallChair extends Chair {
  constructor() {
    super()
    this.height = 40
    this.width = 40
    this.depth = 40
  }
}

export default class MediumChair extends Chair {
  constructor() {
    super()
    this.height = 60
    this.width = 60
    this.depth = 60
  }
}

export default class BigChair extends Chair {
  constructor() {
    super()
    this.height = 80
    this.width = 80
    this.depth = 80
  }
}
```

### Client Usage

```typescript
import ChairFactory from "./chair-factory"

const chair = ChairFactory.getChair("SmallChair")
console.log(chair.getDimensions()) // Output: { width: 40, depth: 40, height: 40 }
```

## Summary

The Factory Pattern defers the creation of objects to a subclass, providing flexibility and abstraction. This pattern is beneficial when the specific type of an object isn't known until runtime, and it helps in managing complexity by localizing the creation logic in a dedicated factory class.
