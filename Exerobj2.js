/*
Array para Object
Escreva uma função que receba um array 2d e retorne um objeto com cada par de elementos do array como um par chave-valor. Por exemplo:
const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]
const obj = {
  fabricante : 'Ford',
  modelo : 'Mustang',
  ano : 1964
}*/
  

const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]
function exercicio (arr){
const obj = {};
for (let index of arr){
    obj[index[0]] = index[1]
}
return obj
}       

console.log (exercicio(arr))