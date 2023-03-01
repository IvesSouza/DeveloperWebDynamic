/**/
function addContact(){
    const contactSelection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contatos:'

    const ul = document.createElement('ul')

    const nameli = document.createElement('li')
    nameli.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameli.appendChild(nameInput)
    ul.appendChild(nameli)




    const foneLi = document.createElement('li')
    foneLi.innerText = 'Telefone'
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    
    foneLi.appendChild(phoneInput)
    ul.appendChild(foneLi)




    const adressLi = document.createElement('li')
    adressLi.innerText = 'Endereço : '
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'endereco'
    
    adressLi.appendChild(adressInput) // Texto com a Check
    ul.appendChild(adressLi) // Jogo o Texto com a check dentro do UL

    contactSelection.append(h3 ,ul)
}


function removeContact(){
    const contactSelection = document.getElementById('contacts-list')
    
    // Pegando os titulos
    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSelection.removeChild(titles[titles.length - 1])
    contactSelection.removeChild(contacts[contacts.length - 1])
}