document.addEventListener('DOMContentLoaded', function () {
    let name = ""
    let email = ""
    let age = 0

    const userName = document.getElementById('name')
    userName.addEventListener('change', function(event) {
        name = userName.value
    });

    const userEmail = document.getElementById('email')
    userEmail.addEventListener('change', function(event) {
        email = userEmail.value
    });

    const userAge = document.getElementById('age')
    userAge.addEventListener('change', function(event) {
        age = userAge.value
    });

    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', function(event) {
        event.preventDefault()

        name == "" ? alert("The Full Name must be filled to proceed.") : false
        email == "" ? alert("The Email must be filled to proceed.") : false
        age <= 0 ? alert("You must be of legal age to proceed.") : false

        const formLocalStorage = JSON.parse(localStorage.getItem('form'))
        const form = {...formLocalStorage, "userName": name, "userEmail": email, "userAge": age }
        localStorage.setItem("form", JSON.stringify(form));
        window.location.href = "../sixth/index.html";
        
    });
});