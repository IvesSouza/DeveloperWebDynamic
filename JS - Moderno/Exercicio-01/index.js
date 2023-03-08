/**/

const avarege = (...number) => {
    const sum = number.reduce((accum, num) => accum + num, 0)
    return sum / number.length
}

console.log(`Média Aritmetica Simples: ${avarege(2 , 2 ,3 ,4 ,5 , 5 , 500)}`)