/**
 * Exercício 01 – Função de saudação
 * Criar uma função que exibe "Olá, Mundo!".
 */

// Define uma função chamada 'saudacao'.
// A palavra-chave 'function' é usada para declarar uma função.
// 'saudacao' é o nome da função, que será usado para chamá-la posteriormente.
// ': void' indica que esta função não retorna nenhum valor.
function saudacao(): void {
  // O corpo da função está entre chaves '{}'.
  // 'console.log()' é uma função em JavaScript/TypeScript que imprime uma mensagem no console.
  // Neste caso, ela imprime a string "Olá, Mundo!".
  console.log("Olá, Mundo!");
}

// Chamando a função
// Para executar o código dentro da função 'saudacao', precisamos chamá-la.
// Fazemos isso usando o nome da função seguido por parênteses '()'.
saudacao();