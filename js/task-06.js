const input = document.querySelector('#validation-input');

const onBlur = () => {
    console.log('blur')
    if (input.value.length !== 6) {
        alert('This is wrong number')
        input.classList.add('invalid');
        input.textContent = '';
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }

}

    

input.addEventListener('blur', onBlur);