const button = document.querySelector('button.greeting')

function changeText(ev){
    ev.target.textContent = "Clicked"
}

button.addEventListener('click', changeText)
