abstract class CoffeePreparation {
  // Template method
  public execute(): void {
    this.boilWater();
    this.prepareCoffee();
    this.serveCoffee();
  }

  // Abstract method to be implemented by subclasses
  protected abstract prepareCoffee(): void;

  // Hook methods - Concrete methods
  protected boilWater(): void {
    console.log("Boiling water...");
  }
  protected serveCoffee(): void {
    console.log("Serving coffee...");
  }
}

class ExpressCoffeePreparation extends CoffeePreparation {
  protected prepareCoffee(): void {
    console.log("Preparing espresso...");
  }
}

class BrazilianCoffeePreparation extends CoffeePreparation {
  protected prepareCoffee(): void {
    console.log("Preparing brazilian coffee...");
  }
}

const espresso = new ExpressCoffeePreparation();
espresso.execute();

const brazilianCoffee = new BrazilianCoffeePreparation();
brazilianCoffee.execute();
