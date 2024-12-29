class Machine {
  constructor() {
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }
  clear(message) {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.getElementById("block").innerHTML += "<br>" + message;
    this.state = "stopped";
  }
  run() {
    this.state = "started";
    document.getElementById("block").innerHTML += "Починаю роботу...<br>";
    document.getElementById("block").innerHTML +=
      "Час приготування - " + this.time / 1000 + "с. <br>";
    this.interval = setInterval(() => {
      document.getElementById("block").innerHTML += " | ";
    }, 1000);
    this.timer = setTimeout(this.onReady, this.time);
  }
  onReady = () => {
    this.clear("Готово");
  };
  stop() {
    this.clear("Примусове вимкнення!");
  }
}
