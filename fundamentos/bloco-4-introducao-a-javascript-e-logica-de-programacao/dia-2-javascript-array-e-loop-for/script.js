// 1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (var i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// ###################################################################################################

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// for (var i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i]
// }

// for (var number of numbers) {
//     sum += number
// }

// console.log(sum);
// ###################################################################################################

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


// for (var valor of numbers) {
//   sum += valor;
// }

// media = sum / numbers.length;

// console.log(media);

// ###################################################################################################

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// for (var valor of numbers) {
//     sum += valor;
//   }
  
//   media = sum / numbers.length;
  
//   console.log(media);
  
//   if (media > 20) {
//       console.log("valor maior que 20")
//   } else {
//       console.log("valor menor ou igual a 20")
//   }

// ###################################################################################################

// 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let higherNumber = 0;

// for (var number of numbers) {
//     if (number > higherNumber) {
//         higherNumber = number
//     }
// }

// console.log(higherNumber)



// ###################################################################################################



// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let cont = 0;

// for (var index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 != 0) {
//         cont++
//     } else {
//         console.log("nenhum valor ímpar encontrado")
//     }
// }

// console.log(cont)


// ###################################################################################################


// Utilizando for , descubra qual o menor valor contido no array e imprima-o;


// let menorNumero = numbers[0];

// for (var index = 1; index < numbers.length; index++) {
    
//     if (numbers[index] < menorNumero) {
//         menorNumero = numbers[index];
//     }
// }
// console.log(menorNumero);



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
