# Abstract Factory Design Pattern in TypeScript

This README covers the Abstract Factory Design Pattern in TypeScript, based on the article from [sbcode.net](https://sbcode.net/typescript/abstract_factory/). The pattern is useful for creating families of related objects without specifying their concrete classes.

## Overview

The Abstract Factory Pattern provides an interface for creating families of related objects. Unlike the Factory Pattern, which deals with a single product, the Abstract Factory can be used to create multiple, related products.

## Example Implementation

### Product Interfaces

```typescript
interface IChair {
  sitOn(): void
}

interface ISofa {
  lieOn(): void
}

interface ICoffeeTable {
  placeOn(): void
}
```

### Concrete Products

```typescript
class VictorianChair implements IChair {
  sitOn(): void {
    console.log("Sitting on a Victorian chair")
  }
}

class ModernChair implements IChair {
  sitOn(): void {
    console.log("Sitting on a Modern chair")
  }
}

class VictorianSofa implements ISofa {
  lieOn(): void {
    console.log("Lying on a Victorian sofa")
  }
}

class ModernSofa implements ISofa {
  lieOn(): void {
    console.log("Lying on a Modern sofa")
  }
}

// Similar implementations for ICoffeeTable products
```

### Abstract Factory Interface

```typescript
interface IFurnitureFactory {
  createChair(): IChair
  createSofa(): ISofa
  createCoffeeTable(): ICoffeeTable
}
```

### Concrete Factories

```typescript
class VictorianFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new VictorianChair()
  }
  createSofa(): ISofa {
    return new VictorianSofa()
  }
  createCoffeeTable(): ICoffeeTable {
    return new VictorianCoffeeTable()
  }
}

class ModernFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new ModernChair()
  }
  createSofa(): ISofa {
    return new ModernSofa()
  }
  createCoffeeTable(): ICoffeeTable {
    return new ModernCoffeeTable()
  }
}
```

### Client Code

```typescript
function main(factory: IFurnitureFactory) {
  const chair = factory.createChair()
  const sofa = factory.createSofa()

  chair.sitOn()
  sofa.lieOn()
}

const victorianFactory = new VictorianFurnitureFactory()
main(victorianFactory) // Outputs Victorian furniture actions

const modernFactory = new ModernFurnitureFactory()
main(modernFactory) // Outputs Modern furniture actions
```

## Summary

The Abstract Factory Pattern is ideal when your system needs to create families of related products, enabling consistency across products while allowing flexibility in product variants.
