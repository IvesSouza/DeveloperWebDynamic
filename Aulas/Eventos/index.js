/**/

// function register(){
//     const button1 =  document.getElementById('register-button')
//     button1.addEventListener('click', function(){
//         alert('Pressionou!')
//     }) // função para adicionar um analisador do botão esperando ele executar algo , no caso elemento click
// }


const button1 =  document.getElementById('register-button')
button1.addEventListener('click',register)

function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value // Resgata o elemento Username no Input
    const pass = sectionElement.children.password.value // Resgata o elemento Username no Input
    const passConfirm = sectionElement.children.passwordConfirmation.value // Resgata o elemento Username no Input

    if (pass == passConfirm) {
        alert("Cadastrado com Sucesso")
    } else {
        alert("As Senhas nao conferem! , tente novamente")
        sectionElement.children.username.value = ''
        sectionElement.children.password.value = ''
        sectionElement.children.passwordConfirmation.value = ''
    }

}

function removerEvento(){
    button1.removeEventListener('click', register) // removerEventListener remove os eventos adicionados com o ADD
}

