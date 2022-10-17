const value = document.querySelector('#value');
const incButton = document.querySelector('button[data-action = "increment"]');
const decButton = document.querySelector('button[data-action = "decrement"]');
let counterValue = 0;
value.innerHTML = counterValue;

const onInc = () => {
    counterValue += 1;
    value.innerHTML = counterValue;
};
incButton.addEventListener("click", onInc);

const onDec = () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
};
decButton.addEventListener("click", onDec);