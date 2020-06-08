const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = 0;
const valueNum = Number(valueRef.textContent);
decrementBtnRef.addEventListener('click', onDecrement);
incrementBtnRef.addEventListener('click', onIncrement);

function onIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function onDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

