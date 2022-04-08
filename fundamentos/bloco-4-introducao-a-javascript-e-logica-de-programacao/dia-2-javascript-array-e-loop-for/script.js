// 1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (var i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// for (var i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i]
// }

// for (var number of numbers) {
//     sum += number
// }

// console.log(sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (var valor of numbers) {
  sum += valor;
}

media = sum / numbers.length;

console.log(media);
