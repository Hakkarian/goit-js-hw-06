const input = document.querySelector('#validation-input');

const onBlur = () => {
    console.log('blur')
    if (input.value.length > 6) {
        input.classList.add('invalid');
        alert("There's more than 6 ;)");
        input.textContent = '';
    } 
        input.classList.add('valid');

    
}

input.addEventListener('blur', onBlur);