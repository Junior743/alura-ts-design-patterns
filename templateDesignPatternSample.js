var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CoffeePreparation = /** @class */ (function () {
    function CoffeePreparation() {
    }
    // Template method
    CoffeePreparation.prototype.execute = function () {
        this.boilWater();
        this.prepareCoffee();
        this.serveCoffee();
    };
    // Hook methods - Concrete methods
    CoffeePreparation.prototype.boilWater = function () {
        console.log("Boiling water...");
    };
    CoffeePreparation.prototype.serveCoffee = function () {
        console.log("Serving coffee...");
    };
    return CoffeePreparation;
}());
var ExpressCoffeePreparation = /** @class */ (function (_super) {
    __extends(ExpressCoffeePreparation, _super);
    function ExpressCoffeePreparation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpressCoffeePreparation.prototype.prepareCoffee = function () {
        console.log("Preparing espresso...");
    };
    return ExpressCoffeePreparation;
}(CoffeePreparation));
var BrazilianCoffeePreparation = /** @class */ (function (_super) {
    __extends(BrazilianCoffeePreparation, _super);
    function BrazilianCoffeePreparation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrazilianCoffeePreparation.prototype.prepareCoffee = function () {
        console.log("Preparing brazilian coffee...");
    };
    return BrazilianCoffeePreparation;
}(CoffeePreparation));
var espresso = new ExpressCoffeePreparation();
espresso.execute();
var brazilianCoffee = new BrazilianCoffeePreparation();
brazilianCoffee.execute();
