function getForm() {
    const secondForm = JSON.parse(localStorage.getItem('form'))
    
    if (secondForm.investmentType){
        document.getElementById('select').value = secondForm.investmentType
        changeSelect(parseInt(secondForm.investmentType))
        selectedValue = secondForm.investmentType;

        for (let index = 0; index < 9; index++) {
            for (let indexForm = 0; indexForm < secondForm.options.length; indexForm++) {
                if (document.getElementsByName('input_checkbox')[index].value == secondForm.options[indexForm]) {
                    document.getElementsByName('input_checkbox')[index].checked = true
                    break
                }
            }
        }
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

    const optionContainers = document.querySelectorAll('.gap');
    let selectedBoxes
    optionContainers.forEach(container => {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]'); 
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', function () {
                selectedBoxes = Array.from(checkboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value);
            });
        });
    });

    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', function(event) {
        event.preventDefault()
        const checkForm = JSON.parse(localStorage.getItem('form'))
        if (selectedBoxes === undefined)
            checkForm.options ? selectedBoxes = checkForm.options : alert("Selecione uma opção para continuar")
        
        else {
            const first = JSON.parse(localStorage.getItem('form'))
            const form = {...first, "investmentType": selectedValue, "options": selectedBoxes }
            localStorage.setItem("form", JSON.stringify(form));
            window.location.href = "../fourth/index.html";
        }        
    });
});
