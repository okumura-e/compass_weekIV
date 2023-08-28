if (window.innerWidth > 640){
    document.getElementById('startButton').textContent = "Just Go Ahead"
}

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton')
    startButton.addEventListener('click', function(event) {
        localStorage.removeItem('form')
    });
});
