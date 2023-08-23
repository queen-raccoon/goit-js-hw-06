const getClassForm = document.querySelector(".login-form"); 

const submitEvent = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const obj = {
        email: email.value,
        password: password.value,
    }

    if (obj.email === "" || obj.password === "") {
        alert("Заповніть всі поля!");
        return;
    };

    console.log(obj);
    getClassForm.reset();
};

getClassForm.addEventListener("submit", submitEvent);