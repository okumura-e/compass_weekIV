function getForm() {
    const firstForm = JSON.parse(localStorage.getItem('form'))
    
    if (firstForm){
        document.getElementById('select').value = firstForm.statusAccount
        changeSelect(firstForm.statusAccount)
        document.getElementsByName('input_radio')[firstForm.option -1].checked = true;
        selectedValue = firstForm.statusAccount;
        selectedRadio = parseInt(firstForm.option)
    }
}

function changeSelect(selectOption) {
    document.querySelector('#optOne').classList.add('hidden')
    document.querySelector('#optTwo').classList.add('hidden')
    document.querySelector('#optThree').classList.add('hidden')

    selectOption == 1 ? document.querySelector('#optOne').classList.remove('hidden') : 0
    selectOption == 2 ? document.querySelector('#optTwo').classList.remove('hidden') : 0
    selectOption == 3 ? document.querySelector('#optThree').classList.remove('hidden') : 0
}

getForm()

document.addEventListener('DOMContentLoaded', function () {
    const getSelect = document.getElementById('select');
    let selectedValue = 1;

    getSelect.addEventListener('change', function () {
        selectedValue = getSelect.value;
        changeSelect(selectedValue)
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
        event.preventDefault()
        const checkForm = JSON.parse(localStorage.getItem('form'))
        
        if (selectedRadio === undefined) {
            checkForm ? selectedRadio = checkForm.option : alert("Selecione uma opção para continuar")
        }
    
        else {
            let form
            if (checkForm) {
                form = {...checkForm, "statusAccount": selectedValue, "option": selectedRadio }
            }
            else {
                form = { "statusAccount": selectedValue, "option": selectedRadio }
            }
            localStorage.setItem("form", JSON.stringify(form));
            window.location.href = "../third/index.html";
            
        }
    });
});
