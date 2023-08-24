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

    const optionContainers = document.querySelectorAll('.gap');  // Seleciona todos os contêineres de opções
    let selectedBoxes
    optionContainers.forEach(container => {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');  // Seleciona todos os checkboxes dentro do contêiner
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('click', function () {
                selectedBoxes = Array.from(checkboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value);
                    
                console.log(selectedBoxes);
            });
        });
    });

    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', function(event) {
        event.preventDefault()
        if (selectedBoxes === undefined)
            alert("Selecione uma opção para continuar")
        
        else {
            const first = JSON.parse(localStorage.getItem('form'))
            const form = {...first, "investmentType": selectedValue, "options": selectedBoxes }
            localStorage.setItem("form", JSON.stringify(form));
            window.location.href = "../fourth/index.html";
        }        
    });
});
