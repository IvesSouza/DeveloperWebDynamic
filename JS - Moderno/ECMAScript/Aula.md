## Template Literals

- Uma nova forma de declarar string
- Utiliza o acento grave (crase) -> Permite a Interpolação de String e quebra a linha automaticamente
- EXEMPLO :

``` js

let str = `Essa linha será
quebrada automaticamente 
  e essa quebrará e  terá um espaço no começo
Resultado da Expressão ${2 + 2}

```


## Arrow Function

- Forma diferente de escrever funções Anônimas
- Unão utiliza a palavra function, usa "=>" apos parâmetros (por isso arrow , do ingles , seta ou flecha)
- Não possui seus próprio this, arguments , super e new.target
- Também permite retornar diretamente uma expressão, caso seja uma função de unica linha.

```js

/* Sem usar Arrow Function */
const sum = (a, b) => {
    return a + b
}

/* Usando Arrow Function */
const multiply = (a,b) => a*b

```

## DEstruturação de Objetos e Arrays

-  Funcionalidades que permite criar variaveis a partir de uma propriedade de um objeto ou elemento de um array
-  No caso das propriedades do objeto , as variaveis serão criadas com o mesmo nome da propriedade
-  No caso dos elementos do array, podemos atribuir qualquer nome para a variavel 
-  Tambem pode ser utilizada de outras formas, como nos parametros de uma função

``` js


```

## Operador Spread

- Operador que permite espalhar um elemento , como , string , object , array ... etc,
- Utiliza tres pontos para chamar : ...Objecto
- Pode ser utilizado para diversos fins

``` js
const town = ['prateleira','sacada','computador']
console.log(town) // Resultado = ['prateleira','sacada','computador']
console.log(...town) // Resultado = prateleira sacada computador


```

## OPerador Encadeamento Opcional

- Operador que permite ler as propriedades internas de uma cadeia de objetos sem que a validação de cada referencia da cadeia seja realizada
- Em outras palavras, permite acessar propriedades internas sem lançar erros quando uma propriedade e nullish
- Funciona similiar ao encadeamento normal (operador ".") porem escrito cm "?."

```js

const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd) // Faz a verificação de todos os dados antes do ".?" , se possuir erro ele para a execução antes de continuar
console.log(user?.brothers?.length)
console.log(user.brothers?.[5].name)


```


## Operador de Coalescência Nula 

- OPerador Logico retorna o seu operador do lado direito quando o lado esquerdo é null ou undefined
- Utiliza o operador "??"
- Ele testa a expressão , se passar ele testa o proxima expressão ,senão ele retornar apenas

```js

let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})

```