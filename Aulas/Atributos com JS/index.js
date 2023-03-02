/**/

const input = document.getElementById('input')


document.getElementById('value').addEventListener('click',function (){
    input.value = input.value === '' ? 'Olá' : ''
    input.getAttribute('value')
})


document.getElementById('type').addEventListener('click', function(){
    // input.type = input.type !== 'radio' ? 'radio' : 'text' // Muda o objeto do atributo , no exemplo tira a check-box e tranforma em Radio
    input.setAttribute('type', 'radio')
})


document.getElementById('placeholder').addEventListener('click',function(){
    input.placeholder = 'Digite Algo ...' // Adiciona um PlaceHolder no input
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute ('disabled' , !input.disabled)
})


