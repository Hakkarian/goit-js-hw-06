const form = document.querySelector('.login-form');
const input = document.querySelector('input');

const onFormSubmit = (event) => {
    event.preventDefault();

    if (input.value.length === 0) {
        alert('Please, fill all the fields ^)');
    }
    form.reset();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    const formEl = event.currentTarget.elements;

    console.log('Email: ', formEl.email.value);

    console.log('Password: ', formEl.password.value);
    formData.forEach((value, name) => {
        console.log('onFormSubmit => name', name);
        console.log('onFormSubmit => value', value);
    })
    
}  

form.addEventListener("submit", onFormSubmit);