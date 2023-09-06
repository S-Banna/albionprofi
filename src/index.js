let tax = 95;

const premSwitch = document.getElementById("premium");
premSwitch.addEventListener("click", () => {
  if (premSwitch.textContent == "Current: Premium") {
    premSwitch.textContent = "Current: No Premium";
    tax = 92;
  } else {
    premSwitch.textContent = "Current: Premium";
    tax = 95;
  }
});

const pricing4 = document.getElementById("t4").querySelectorAll("input");
const profits4 = document.getElementById("t4").querySelectorAll("div");
const order4 = document.getElementById("t4").querySelectorAll("span");
const calc4 = document.getElementById("t4").querySelector("button");
calc4.addEventListener("click", () => {
  for (let i = 0; i < 25; i = i + 2) {
    let temp = pricing4[i].value * (tax / 100) - pricing4[i + 1].value;
    let tempOrder =
      pricing4[i].value * ((tax - 2.5) / 100) - pricing4[i + 1].value;
    profits4[i + 1].textContent = temp.toFixed(2);
    order4[i / 2].textContent = tempOrder.toFixed(2);
  }
});

const pricing5 = document.getElementById("t5").querySelectorAll("input");
const profits5 = document.getElementById("t5").querySelectorAll("div");
const order5 = document.getElementById("t5").querySelectorAll("span");
const calc5 = document.getElementById("t5").querySelector("button");
calc5.addEventListener("click", () => {
  for (let i = 0; i < 25; i = i + 2) {
    let temp = pricing5[i].value * (tax / 100) - pricing5[i + 1].value;
    let tempOrder =
      pricing5[i].value * ((tax - 2.5) / 100) - pricing5[i + 1].value;
    profits5[i + 1].textContent = temp.toFixed(2);
    order5[i / 2].textContent = tempOrder.toFixed(2);
  }
});

const pricing6 = document.getElementById("t6").querySelectorAll("input");
const profits6 = document.getElementById("t6").querySelectorAll("div");
const order6 = document.getElementById("t6").querySelectorAll("span");
const calc6 = document.getElementById("t6").querySelector("button");
calc6.addEventListener("click", () => {
  for (let i = 0; i < 26; i = i + 2) {
    let temp = pricing6[i].value * (tax / 100) - pricing6[i + 1].value;
    let tempOrder =
      pricing6[i].value * ((tax - 2.6) / 100) - pricing6[i + 1].value;
    profits6[i + 1].textContent = temp.toFixed(2);
    order6[i / 2].textContent = tempOrder.toFixed(2);
  }
});

const pricing7 = document.getElementById("t7").querySelectorAll("input");
const profits7 = document.getElementById("t7").querySelectorAll("div");
const order7 = document.getElementById("t7").querySelectorAll("span");
const calc7 = document.getElementById("t7").querySelector("button");
calc7.addEventListener("click", () => {
  for (let i = 0; i < 27; i = i + 2) {
    let temp = pricing7[i].value * (tax / 100) - pricing7[i + 1].value;
    let tempOrder =
      pricing7[i].value * ((tax - 2.7) / 100) - pricing7[i + 1].value;
    profits7[i + 1].textContent = temp.toFixed(2);
    order7[i / 2].textContent = tempOrder.toFixed(2);
  }
});

const pricing8 = document.getElementById("t8").querySelectorAll("input");
const profits8 = document.getElementById("t8").querySelectorAll("div");
const order8 = document.getElementById("t8").querySelectorAll("span");
const calc8 = document.getElementById("t8").querySelector("button");
calc8.addEventListener("click", () => {
  for (let i = 0; i < 28; i = i + 2) {
    let temp = pricing8[i].value * (tax / 100) - pricing8[i + 1].value;
    let tempOrder =
      pricing8[i].value * ((tax - 2.8) / 100) - pricing8[i + 1].value;
    profits8[i + 1].textContent = temp.toFixed(2);
    order8[i / 2].textContent = tempOrder.toFixed(2);
  }
});
