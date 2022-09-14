// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// c) Uma função que receba um número e imprima se ele é par ou não

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const soma = (num1,num2) =>{
    resp = num1 + num2
    console.log(`${num1} + ${num2} = ${resp}`)
    return resp
}
console.log(soma(Number(prompt("Digite um número que deseja somar")),Number(prompt("Digite outro número que desejar somar"))))

const vOuF =(num1,num2) => {
    console.log(`Primeiro número é ${num1}`);
    console.log(`Segundo número é ${num2}`);
    resp = num1 >= num2
    return resp
}
console.log(`Primeiro número é maior ou igual que o segundo?: ${vOuF(Number(prompt("Digite um número")),Number(prompt("Digite outro número")))}`);

const par = (num) =>{
    if (num%2 ===0){
        return "Esse número é par"
    }else{
        return "Esse número não é par"
    }
}
let numero = Number(prompt("Digite qualquer número"))
console.log(`Você digitou ${numero}: ${par(numero)}`)

const mensagem = (mensa) => {
    console.log (`${mensa.trim()} tem ${mensa.replace(" ","").trim().length} letras
e em letras maiúsculas fica ${mensa.toUpperCase().trim()}`)
}

mensagem(prompt("Digite aqui uma mensagem"))