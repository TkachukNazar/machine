class Multivariate extends Machine {
  constructor() {
    super();
    this.dish = "каша";
  }
  run(dish) {
    if (dish != undefined) this.dish = dish;
    if (this.state != "started") {
      document.getElementById(
        "block"
      ).innerHTML = `Приготування: ${this.dish}<br>`;
      switch (dish) {
        case "суп":
          this.time = 15000;
          break;
        case "гречка":
          this.time = 10000;
          break;
        case "випічка":
          this.time = 20000;
          break;
        case "плов":
          this.time = 9000;
      }
      super.run();
    } else {
      this.stop();
    }
  }
}

let multivariate = new Multivariate();

document.getElementById("soup").addEventListener("click", function () {
  multivariate.run("суп");
});
document.getElementById("buckwheat").addEventListener("click", function () {
  multivariate.run("гречка");
});
document.getElementById("pastry").addEventListener("click", function () {
  multivariate.run("випічка");
});
document.getElementById("plov").addEventListener("click", function () {
  multivariate.run("плов");
});
document.getElementById("stop").addEventListener("click", function () {
  if (multivariate.state == "started") {
    multivariate.stop();
  }
});
