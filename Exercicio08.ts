// Define uma função chamada 'parOuImpar'.
// 'n: number' é o parâmetro de entrada, que deve ser um número.
// ': string' indica que a função retornará um valor do tipo string ("Par" ou "Ímpar").
function parOuImpar(n: number): string {
    // A condição 'if' verifica o resultado da operação 'n % 2'.
    // O operador '%' (módulo) retorna o resto de uma divisão.
    // Se um número dividido por 2 tem resto 0, ele é par.
    if (n % 2 === 0) {
        // Se a condição for verdadeira (o número é par), a função retorna a string "Par".
        return "Par";
    } else {
        // Se a condição 'if' for falsa, o bloco 'else' é executado.
        // Isso significa que o número não é par, logo, é ímpar.
        // A função retorna a string "Ímpar".
        return "Ímpar";
    }
}

// Chama a função 'parOuImpar' com o argumento 7.
// O valor retornado ("Ímpar") é inserido na template string.
console.log(`7 é ${parOuImpar(7)}`);