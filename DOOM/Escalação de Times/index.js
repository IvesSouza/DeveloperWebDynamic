/* Falta criar uma função que delete o JOgador cadastrado e atualize os dados da pagina. Preferencialmente  utizando o object*/
let jogEscalados = []
let cont = 0

function cadastroJogador(){
    //  let nome1 = prompt('Digite o nome do jogador: ')
    //  let camisa1 = prompt('Digite o numero da camisa: ')
    //  let posicao1 = prompt('Digite a posição do jogador: ')

    let nome1 = document.getElementById("nome").value
    let camisa1 = document.getElementById("camisa").value
    let posicao1 = document.getElementById("posicao").value

     let arryTemp = {
        index: cont,
        nome: nome1,
        camisa: camisa1,
        posicao: posicao1
     }

     cont++

    document.getElementById("nome").value=''
    document.getElementById("camisa").value=''
    document.getElementById("posicao").value=''
    return jogEscalados.push(arryTemp,atualizar(arryTemp.index , arryTemp.nome , arryTemp.camisa , arryTemp.posicao))
    }

    function deleteJog(){
        esc = confirm('Deseja mesmo deletar esse jogador?')
        if(esc == true){
            let cod = document.getElementById("deleteJog").value
            document.getElementById("deleteJog").value=''
            jogEscalados.splice(cod,1)

        } else {
            alert("Operação Cancelada!")
        }
    }

    function atualizar(index5 , nome5 , camisa5 , posicao5){
        const listSelection = document.getElementById('list')
        const ulList = document.createElement('ul')
        const liList = document.createElement('li')
        const pList = document.createElement('p')

        pList.innerHTML = 'Nome :' + nome5 +' | Camisa:  ' + camisa5 + ' | Posição: ' + posicao5
        liList.appendChild(pList)
        ulList.appendChild(liList)

        listSelection.append(ulList)

    }