export default class Clock {
  constructor(min, sec, listComponent, id) {
    this.min = min;
    this.sec = sec;
    this.listComponent = listComponent;
    this.id = id;

    this.codeHTML();
    this.printTime();
  }

  printTime() {
   // code here 
   // add 0 for min and sec
  }

  codeHTML = () => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.id = this.id;

    let buttonStart = document.createElement("button");
    buttonStart.innerHTML = "Start";
    buttonStart.addEventListener("click", this.start.bind(this));

    let buttonStop = document.createElement("button");
    buttonStop.innerHTML = "Stop";
    buttonStop.addEventListener("click", this.stop.bind(this));

    // add in li tag
    li.appendChild(span);
    li.appendChild(buttonStart);
    li.appendChild(buttonStop);

    // add item in ol (list)
    this.listComponent.appendChild(li);
  };

  updateTimeBySec() {
    // code here 
    // update time by second (plus 1 for sec and check if sec > 59 => +1 for min)
  }

  start() {
    this.timer = setInterval(() => {
      this.updateTimeBySec();
      this.printTime();
    }, 1000);
  }

  stop() {
    // code here 
    // use clearInterval func to stop property this.timer
  }
}
