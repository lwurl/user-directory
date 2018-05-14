const button = document.querySelector('button.change')

function changeText(ev){
    const heading = document.querySelector('h1.change')
    heading.textContent = "You clicked the button!"
}

button.addEventListener('click', changeText)
