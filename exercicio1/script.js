// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

// function nome (nome){
//     console.log(`Olá, ${nome}`)
// }
// nome("luiz")
// function tabuada (num){
//     for(i = 0; i <= 10; i++){ 
//         const resp =(i*num)
//         console.log(`${i} x ${num} = ${resp}`)
//     }
    
// }
// (tabuada(6))

// ARROW FUNCTIONS

const nome = (nome) =>`Olá, ${nome}`

console.log(nome("Luiz"))

const tabuada = (num) => {
    for(i = 0; i <= 10; i++){
        const resp = i*num
        console.log(`${i} x ${num} = ${resp}`)  
    }
    
}
tabuada(6)