// Define uma função chamada 'somar'.
// 'a: number' e 'b: number' são parâmetros que esperam números.
// ': number' após os parênteses indica que esta função retornará um valor do tipo número.
function somar(a: number, b: number): number {
    // A palavra-chave 'return' encerra a execução da função
    // e envia o resultado da expressão 'a + b' de volta para onde a função foi chamada.
    return a + b;
}

// Chama a função 'somar' com os argumentos 10 e 5.
// O valor retornado (15) é então incorporado a uma template string
// e exibido no console.
console.log (`Resultado: ${somar(10, 5)}`);