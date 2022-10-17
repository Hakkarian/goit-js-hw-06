const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');
const onControl = () => {
    const rangeValue = range.value;
    text.style.fontSize = rangeValue + "px";
}
range.addEventListener("input", onControl);
