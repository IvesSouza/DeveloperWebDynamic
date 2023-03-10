/* Guardando Elementos no SessionStorage */
document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    // sessionStorage.setItem(chave , valor_da_chave)
    sessionStorage.setItem('info',input.value)
    input.value = ''
})

/* Buscando Elementos no SessionStorage */
document.getElementById('readSesssion').addEventListener('click',function(){
    const input = document.getElementById('session')
    let valor = sessionStorage.getItem('info')
    input.value = valor

    
})


/* Local Storage */

/* Adicionando Itens ao Local */
document.getElementById('localBtn').addEventListener('click',function(){
    const input =  document.getElementById('local')
    localStorage.setItem('Armazenamento_Local', input.value)
    input.value = ''
})

/* Lendo Itens no Local */
document.getElementById('readLocal').addEventListener('click',function(){
    const input =  document.getElementById('local')
    const local = localStorage.getItem('Armazenamento_Local')
    input.value = local
})

/* Deletando Itens do Local */
document.getElementById('delLocal').addEventListener('click',function(){
    let valor = localStorage.getItem('Armazenamento_Local')
    const esc = confirm(`Você deseja mesmo deletar o valor : ${valor} do LocalStorege?`)
    if(esc == true){
        localStorage.removeItem('Armazenamento_Local')
        alert('Deletado com sucesso!')
    } else {
        alert('Operação cancelada')
    }
})

/* Cookie */


/* Pega a Data Atual e Adiciona a quantidade de dias para o Cookie Manter na maquina */
function addDaysToDate(date , days){
    var res = new Date(date)
    res.setDate(res.getDate() + days)
    return res
}

var tmpDate = new Date()
tmpDate = addDaysToDate(tmpDate,3)
console.log(tmpDate)


/* ----- FIM Function Date ----- */

/* Adicionando Cookie */

document.getElementById('cookieBtn').addEventListener('click',function(){
    const input = document.getElementById('cookie')
    // Cookies : cookieName=value; expires=UTCStringDate; path=/CAMINHO
    const cookie = 'info_cookie=' + input.value + ';'
    const expiration = 'expires=' + tmpDate + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = '' 
})