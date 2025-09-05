// Define uma função chamada 'multiplicar'.
// 'a: number' e 'b: number' são os parâmetros, ambos esperando valores numéricos.
// ': number' indica que a função retornará um valor do tipo número.
function multiplicar(a: number, b: number): number {
    // A palavra-chave 'return' encerra a execução da função
    // e envia o resultado da expressão 'a * b' de volta para onde a função foi chamada.
    return a * b;
}

// Chama a função 'multiplicar' com os argumentos 6 e 7.
// O valor retornado (42) é então incorporado a uma template string
// e exibido no console.
console.log(`Resultado: ${multiplicar(6, 7)}`);