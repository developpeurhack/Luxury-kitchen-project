
// email

let form = document.querySelector("#forms");

form.email
console.log(form.email)
form.email.addEventListener('change', function () {
    EmailValid(this);
});
const EmailValid = function (inputEmail) {
    let regexEmail = new Regex('^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}$', 'g');
    let small = inputEmail.nextElementSibling; // on recupere small
    let testEmail = regexEmail.test(inputEmail.value); // on test l expression reguliere
    if (testEmail == true) {
        small.innerHTML = "Adress is valid";
        small.classList.remove('color-red');
        small.classList.add('color-green');

    } else {
        small.innerHTML = 'Adress not valid';
        small.classList.remove('color-green');
        small.classList.add('color-red');
    }
}



// nom 
let forms = document.getElementById("forms"); // recuperer le formulaire
forms.addEventListener('submit', function (e) {
    // controle la soumission du form
    let regexNom = /^[a-zA-Z-.\s]+$/;
    let inputNom = document.getElementById('nom');
    if (inputNom.value.trim() == "") {
        let myError = document.getElementById('error');
        myError.innerHTML = "Remplir le champs SVP";
        myError.style.color = "red";
        e.preventDefault();
    } else if (regexNom.test(inputNom.value) == false) {
        let myError = document.getElementById('error');
        myError.innerHTML = "le champs n'est pas valide ";
        myError.style.color = "red";

    }

})
