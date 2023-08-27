function getForm() {
    const thirdForm = JSON.parse(localStorage.getItem('form'))
    
    if (thirdForm.report){
        document.getElementById('text').value = thirdForm.report
    }
}

getForm()

document.addEventListener('DOMContentLoaded', function () {
    let report = ""
    const text = document.getElementById('text')
    text.addEventListener('change', function(event) {
        report = text.value
    });

    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', function(event) {
        event.preventDefault()
        const checkForm = JSON.parse(localStorage.getItem('form'))
        if (report.length <= 10)
            checkForm.report ? report = checkForm.report : alert("The field must be filled to proceed.")
    
        else {
            const first = JSON.parse(localStorage.getItem('form'))
            const form = {...first, "report": report }
            localStorage.setItem("form", JSON.stringify(form));
            window.location.href = "../fifth/index.html";
        }   
        
    });
});
