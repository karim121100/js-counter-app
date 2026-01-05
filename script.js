let count = 0;

function increase() {
  count++;
  document.getElementById("count").textContent = count;
}

function decrease() {
  count--;
  document.getElementById("count").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("count").textContent = count;
}
