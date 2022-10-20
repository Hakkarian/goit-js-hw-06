const form = document.querySelector('.login-form');
const input = document.querySelector('input');

const onFormSubmit = (e, formEl) => {
    formEl = e.currentTarget.elements;
    e.preventDefault();

    if (formEl.password.value.length === 0 || formEl.email.value.length === 0) {
        onReset();
        return alert('Please, fill all the fields ^)');
    }

    onFormConsole(e);

    onReset();
}  

const onFormConsole = (e, formEl) => {
    formEl = e.currentTarget.elements;

    const formObj = {
        email: formEl.email.value,
        password: formEl.password.value,
    }
    console.log(formObj);
    
}
const onReset = () => {
    form.reset();
}


form.addEventListener("submit", onFormSubmit);