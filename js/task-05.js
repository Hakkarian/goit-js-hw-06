const refs = {
    input: document.querySelector('#name-input'),
    anon: document.querySelector('#name-output'),
};
refs.anon.defaultValue = 'Anonymous';
const onType = (event) => {
    console.log(event.currentTarget.value)
    refs.anon.textContent = event.currentTarget.value;
    if (refs.anon.textContent.length === 0) {
        refs.anon.textContent = "Anonymous"
    }
}
refs.anon.textContent = 'Anonymous'
refs.input.addEventListener("input", onType);