document.addEventListener('DOMContentLoaded', function () {
    let report = ""
    const text = document.getElementById('text')
    text.addEventListener('change', function(event) {
        report = text.value
    });

    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', function(event) {
        event.preventDefault()
        if (report.length <= 10)
            alert("The field must be filled to proceed.")
    
            else {
                const first = JSON.parse(localStorage.getItem('form'))
                const form = {...first, "report": report }
                localStorage.setItem("form", JSON.stringify(form));
                window.location.href = "../fifth/index.html";
            }   
        
        
    });
});
