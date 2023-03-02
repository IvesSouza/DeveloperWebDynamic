/* Nas Functions useLighTheme e UseDarkTheme estamos manipulando o Style em lina de HTML , podendo da conflito
   com a folha de estilos! - Se atentar a isto*/
let BG = 0
function useLighTheme(){
//  console.log(document.body.style) >> Possui todos os itens de CSS para manipular ,caso seja necessario
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
    BG = 0

}

function useDarkTheme(){
    //  console.log(document.body.style) >> Possui todos os itens de CSS para manipular ,caso seja necessario
        document.body.style.color = '#f1f5f9'
        document.body.style.backgroundColor = '#212529'
        BG = 1
    
    }

function swithColor(){
    //  console.log(document.body.style)
    //  console.log(document.body.style.backgroundColor)
    // if (document.body.style.backgroundColor == "rgb(33, 37, 41)"){
    //     console.log('Claro')
    //     useLighTheme()
    // }else if (document.body.style.backgroundColor == "rgb(241, 245, 249"){
    //     console.log('escuro')
    //     useDarkTheme()
    // }

    if (BG == 1){
        console.log('Claro')
        useLighTheme()
    }else {
        useDarkTheme()
    }

}

function swithColor1(){ // Outra opção de Troca de cor
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
    // Neste Método trocamos o Estilo na folha de estilos , não em Line no HTML
}



document.getElementById('lightBtn').addEventListener('click',useLighTheme)
document.getElementById('darkBtn').addEventListener('click',useDarkTheme)
document.getElementById('switchBtn').addEventListener('click',swithColor)
document.getElementById('switchBtn1').addEventListener('click',swithColor1)