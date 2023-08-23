document.addEventListener('DOMContentLoaded', function () {
    const getSelect = document.getElementById('select');
    let selectedValue = 1;

    getSelect.addEventListener('change', function () {
        selectedValue = getSelect.value;
        
        document.querySelector('#optOne').classList.add('hidden')
        document.querySelector('#optTwo').classList.add('hidden')
        document.querySelector('#optThree').classList.add('hidden')

        selectedValue == 1 ? document.querySelector('#optOne').classList.remove('hidden') : 0
        selectedValue == 2 ? document.querySelector('#optTwo').classList.remove('hidden') : 0
        selectedValue == 3 ? document.querySelector('#optThree').classList.remove('hidden') : 0
    });

    const radio = document.querySelectorAll('input[name="input_radio"]');
    let selectedRadio
    for (let index = 0; index < 9; index++) {
        const element = radio[index];
        
        element.addEventListener('change', function () {
            selectedRadio = document.querySelector('input[name="input_radio"]:checked').value;
        })
    }
    
    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', function(event) {
        if (selectedRadio === undefined)
            alert("Selecione uma opção para continuar")
        
        else{
            const form = { "statusAccount": selectedValue, "option": selectedRadio }
            localStorage.setItem("form", JSON.stringify(form));
            window.location.href = "../third/index.html";
        }

        
    });
});
