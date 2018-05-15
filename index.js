const button = document.querySelector('button.change')

function changeText(ev){
    const inputText = document.querySelector('#changeText')
    const headings = document.querySelectorAll('h1')
    const dropdown = document.querySelector('#headingChoice')
    //debugger
    headings[dropdown.value].textContent = inputText.value
}

button.addEventListener('click', changeText)
