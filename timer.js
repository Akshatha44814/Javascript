let timer = null;
let count = 0;
const startTimer = () => {
  console.log(!timer);
  if (!timer) {
    timer = setInterval(() => {
      count = count + 1;
      valuelement.innerHTML = `<h1>${count}</h1>`;
    }, 1000);
  }
};
const stoperTimer = () => {
  clearInterval(timer);
  timer = null;
};

const resetTimer = () => {
  count = 0;
  clearInterval(timer);
  timer = null;
  valuelement.innerHTML = `<h1>${count}</h1>`;
};

const start = document.createElement("button");
start.innerText = "start";

const stoper = document.createElement("button");
stoper.innerText = "stop";

const reset = document.createElement("button");
reset.innerText = "reset";

const valuelement = document.createElement("p");
valuelement.innerHTML = `<h1>${count}</h1>`;
const sib1 = document.createElement("div");

sib1.appendChild(valuelement);
sib1.appendChild(start);
sib1.appendChild(stoper);
sib1.appendChild(reset);

document.body.appendChild(sib1);

start.addEventListener("click", () => startTimer());
stoper.addEventListener("click", () => stoperTimer());
reset.addEventListener("click", () => resetTimer());
