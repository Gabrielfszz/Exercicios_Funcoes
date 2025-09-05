// Define uma função chamada 'dobro'.
// 'n: number' é um único parâmetro que espera um número.
// ': number' indica que a função retornará um valor do tipo número.
function dobro(n: number): number {
    // A palavra-chave 'return' devolve o valor do parâmetro 'n' multiplicado por 2.
    return n * 2;
}

// Chama a função 'dobro' com o argumento 12.
// O resultado (24) é inserido na template string e impresso no console.
console.log(`Dobro de 12 = ${dobro(12)}`);