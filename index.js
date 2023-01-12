const counterElm = document.getElementById("counter");
let counter = 0;
const increment = () => {
  counter++;
  counterElm.innerText = `counter value is ${counter}`;
};

const decrement = () => {
  counter--;
  counterElm.innerText = `counter value is ${counter}`;
};
