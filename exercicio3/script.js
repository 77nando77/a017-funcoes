// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

const soma = (num1,num2)=>{
    let resp = num1 + num2
    return resp
}
const sub = (num1,num2)=>{
    let resp = num1 - num2
    return resp
}
const mult = (num1,num2)=>{
    let resp = num1 * num2
    return resp
}
const div = (num1,num2)=>{
    let resp = num1 / num2
    return resp
}
let numero1= Number(prompt("Digite um valor qualquer:"))
let numero2= Number(prompt("Digite outro valor qualquer:"))
console.log(`A soma de ${numero1} e ${numero2} é: ${soma(numero1,numero2)}`)
console.log(`A subtração de ${numero1} e ${numero2} é: ${sub(numero1,numero2)}`)
console.log(`A multiplicação de ${numero1} e ${numero2} é: ${mult(numero1,numero2)}`)
console.log(`A divisão de ${numero1} e ${numero2} é: ${div(numero1,numero2)}`)
