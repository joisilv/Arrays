const cartao = "4556993097063271"

const cartaoConvertido = cartao.split('')
/*console.log(cartaoConvertido)*/

const cartaoParseado = cartaoConvertido.map (function(i)
{
    return parseInt(i)
})



const digitoVerificador = cartaoParseado.pop()

console.log(cartaoParseado)
cartaoParseado.reverse()
console.log(cartaoParseado)
const numerosMultiplicados = cartaoParseado.map (function(i,indice){

    if (indice % 2 === 0){
        
        i *= 2
        if (i > 9){
            return i -= 9
        }
        return i
    }
    return i
})
console.log(numerosMultiplicados)

const numeroFinal = numerosMultiplicados.reduce(function(acum,atual){
    return acum + atual
},0)

console.log(numeroFinal + digitoVerificador)
