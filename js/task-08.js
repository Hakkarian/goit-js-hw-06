const form = document.querySelector('.login-form');
const input = document.querySelector('input');

const onFormSubmit = (e) => {
    e.preventDefault();

    if (input.value.length === 0) {
        alert('Please, fill all the fields ^)');
    }

    onFormConsole(e);

    onReset();
}  

const onFormConsole = (e) => {
    const formEl = e.currentTarget.elements;

    console.log('Email: ', formEl.email.value);

    console.log('Password: ', formEl.password.value);
    
}
const onReset = () => {
    form.reset();
}


form.addEventListener("submit", onFormSubmit);