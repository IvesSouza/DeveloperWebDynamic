Criar o projeto no VSC

```react

npx create-react-app nome-do-projeto

```

Para iniciar o projeto e modifica-lo usa-se :

``` bash

npm start

```


Podemos chamar outro arquivo JS dentro do nosso app.js usando a função Import 

```js
// Arquivo 1
import React from 'react'


// Temos que passar um return para que a saida da função vá para o outro arquivo, assim:
export default NOmeFuncao;


// Arquivo 2
import React from 'react'
import NomeFuncao from 'caminho' // Usando essa chamada consegue importar uma função

// Assim conseguimos colocar a function dentro do App() sendo que ele não está dentro do mesmo arquivo
function App() {
  return (
    <div>
      <NomeFuncao/> <!-- Aqui coloca a função entre </> -->
    </div>
  );
}

```

## Uso do Fragment

Importe o Fragment dentro da biblioteca do React para fazer uso do mesmo:
como Fragment permite que não seja renderizado aquele bloco de escrito que envolve o objeto HTML. 
Todo Elemento obriga a está dentro de um elemento ou nó no HTML , digo quando tem mais de 1 Objeto .. 
O fragment permite que não tenhamos esse elemento que envolve , como um div , e permite que possamos colocar varios elementos dentro de um local apenas

```js

import React , {fragment} from 'react'

```

## Funções Puras

- A função pura recebe duas propriedade 'A' e 'B'
- A Funçao não altera seu valor das entradas
- Sempre retorna os mesmos valores caso a entrada sempre seja a mesma
- Exemplo :


```js

function sum(a,b){
  return a + b
}

```

## Função impura

- A função altera o valor de sua entrada
- Exemplo :


```js

function witchDrao(account, amount){
  account.total -= amount
}

```

# Renderização Condicional

- Mostra algo Conforme a condição
- Podemos passar informações entre IF para execução de algo

```js

if(props.link){
  return ( EXECUÇÂO DO CODIGO)
} else (
  return (
    DESCRIÇÂO DE CODIGO
  )
)


```
# Impedindo Renderização de OBJ

- Impede que algo seja feito sem que uma condições seja feita

```js

const ChamadaConst = (props) => {
  if (!Props.var){
    return null;
  }
}

```

# Renderização Multiplos Components

```js

// Arquivo 01 - Planets
  const name = ['a','b','c']
  const satellites = names.map((n) =>
    <li> Satelite {N} </li>
  )


// Arquivo 02 - Sateletis
  <h4>Sateletis</h4>
  <ul>
    {satellites}
  </ul>


```




# Estados

- State é um objeto JS que guarda os dados de um componente e determina os comportamento deles
- Quando um estado é atualizado o component é renderizado

## Diferença entre Props e State 

- Props passa o comportamento pai para o filho
- Já o state pertence a cada componentes

- Exemplo de criação um estado em um componente de classe
```js

constructor(props){
  super(props);
  this.state = {
    cont : 0
  }
}

incrementCount(){
  this.setState((state) => {
    return {count: state.count + 1}
  });
}


// Tem que chamar a declaração com import

import React, { useState } from 'react';
...
const  [count, setCount] = useState(0);
...


```


##  Life Cycle

- Tempo de vida de cada componente em React
- 3 Fases para manipula-los e MOnitora-los
-- Mounting : Quando um elemento é colocado no DOM
-- Updating : Quando um componente é atualizado 
-- Unmounting : Quando um componente é removido do DOM


## Incluindo LifeCycle na classe




# 

```js



```
