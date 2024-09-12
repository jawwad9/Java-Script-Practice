
const form = document.querySelector ('form')
const fullName = document.querySelector ('#full-name')
const email = document.querySelector ('#email')
const password = document.querySelector ('#password')


const arr = []


const namaError = document.querySelector('#nama-error')
const emailError = document.querySelector('#email-error')
const passwordError = document.querySelector('#password-error')
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

form.addEventListener('submit' , function (event){

    if(fullName.value === '' || fullName.value == null)
        {
        event.preventDefault();
    namaError.innerHTML = 'Name is required';
    }

    if(!email.value.match(emailRegex))
        {
            event.preventDefault();
        emailError.innerHTML = 'Valid Email is required';
        }

    if(password.value.length <= 5)
        {
            event.preventDefault();
        passwordError.innerHTML = 'password must be more than 6 character';
        }

    arr.push({
        email: email.value,
        password: password.value,
        fullName: fullName.value,
    });
    console.log(arr)
});











































