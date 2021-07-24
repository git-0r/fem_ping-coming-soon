const input = document.querySelector('input');
const errorMsg = document.querySelector('.error-msg');
const button = document.querySelector('button');



input.addEventListener('invalid', () => {

    input.style.border = "1px solid hsl(354, 100%, 66%)";
    errorMsg.style.visibility = "visible";
    errorMsg.style.display = "block";

})

button.addEventListener('click', () => {

    input.style.border = "1px solid grey";
    errorMsg.style.visibility = "hidden";
})