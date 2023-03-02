/**/
// Passagem de Dados por Parametro Input
function register(element){
    console.log(element) // Puxa o elemento que foi passado com parametro no HTML
    const username = element.children.username.value // Puxa o elemento "name" do Html 
    const senha = element.children.password.value
    const passwordConfirm = element.children.passwordConfirmation.value

    console.log(username,senha,passwordConfirm)

    if(senha != passwordConfirm){
        alert('As senhas cadastradas não são iguais!')
        alert('Tente Novamente')
    } else {
        alert('Usuario Cadastrado!')
    }
}