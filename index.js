const form = document.querySelector('#userForm')

const renderColor = function(favoriteColor){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const renderListItem = function(text, isColor, favoriteColor){
    const item = document.createElement('li')
    item.textContent = text
    if (isColor){
        item.appendChild(renderColor(favoriteColor))
    }
    return item
}

const renderList = function(userName, age, favoriteColor){
    // Create list
    const list = document.createElement('ul')

    // Create list items
    list.appendChild(renderListItem(`Name: ${userName}`, false, null))

    list.appendChild(renderListItem(`Age: ${age}`, false, null))

    list.appendChild(renderListItem('Favorite Color: ', true, favoriteColor))

    return list
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  users.appendChild(renderList(userName, age, favoriteColor))

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)