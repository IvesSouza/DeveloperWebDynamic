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