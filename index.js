const button = document.querySelector('button.greeting')

function changeText(){
    const para = document.querySelector('p.greeting')
    para.textContent = 'You clicked!'
}

button.addEventListener('click', changeText)
