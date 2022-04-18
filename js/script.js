let InputField = document.querySelector("#text-field");
let NoOfLetters = document.querySelector("#count");

function CountLetters() {
    NoOfLetters.innerHTML = `Founded ${InputField.value.length} letters!`;
}

InputField.addEventListener("keyup", CountLetters);