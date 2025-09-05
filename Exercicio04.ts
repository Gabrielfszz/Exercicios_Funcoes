// Define uma função chamada 'subtrair'.
// 'a: number' e 'b: number' são parâmetros que esperam números.
// ': number' indica que esta função retornará um valor do tipo número.
function subtrair(a: number, b: number): number {
    // A palavra-chave 'return' encerra a execução da função
    // e envia o resultado da expressão 'a - b' de volta para onde a função foi chamada.
    return a - b;
}

// Chama a função 'subtrair' com os argumentos 20 e 8.
// O valor retornado (12) é então incorporado a uma template string
// e exibido no console.
console.log(`Resultado: ${subtrair(20, 8)}`);