const button = document.querySelector('button.change')

function changeText(ev){
    const inputText = document.querySelector('#changeText')
    const heading = document.querySelector('h1.change')
    heading.textContent = inputText.value
}

button.addEventListener('click', changeText)
