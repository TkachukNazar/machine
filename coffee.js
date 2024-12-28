class CoffeeMachine extends Machine {
  constructor() {
    super();
    this.drink = "вода";
  }
  run(drink) {
    if (drink != undefined) this.drink = drink;
    if (this.state != "started") {
      document.getElementById(
        "block"
      ).innerHTML = `Приготування: ${this.drink}<br>`;
      switch (drink) {
        case "латте":
          this.time = 5000;
          break;
        case "еспресо":
          this.time = 3000;
          break;
        case "американо":
          this.time = 7000;
          break;
        case "капучіно":
          this.time = 6000;
      }
      super.run();
    } else {
      this.stop();
    }
  }
}

let coffeeMachine = new CoffeeMachine();

document.getElementById("latte").addEventListener("click", function () {
  coffeeMachine.run("латте");
});
document.getElementById("espresso").addEventListener("click", function () {
  coffeeMachine.run("еспресо");
});
document.getElementById("americano").addEventListener("click", function () {
  coffeeMachine.run("американо");
});
document.getElementById("cappuccino").addEventListener("click", function () {
  coffeeMachine.run("капучіно");
});
document.getElementById("stop").addEventListener("click", function () {
  if (coffeeMachine.state == "started") {
    coffeeMachine.stop();
  }
});
