const reset = document.querySelector(".btn-reset");
const num = document.querySelector(".num");
let count = 0;
const increase = document.querySelector(".btn-up");
const decrease = document.querySelector(".btn-down");

// console.log(number);

function reseting() {
  count = 0;
  num.textContent = count;
}

function increasing() {
  count++;
  num.textContent = count;
  console.log("number increased by 1");
}

function decreasing() {
  count--;
  num.textContent = count;
  console.log("number decreased by 1");
}

reset.addEventListener("click", reseting);
increase.addEventListener("click", increasing);
decrease.addEventListener("click", decreasing);
