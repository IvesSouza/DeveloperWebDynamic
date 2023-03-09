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