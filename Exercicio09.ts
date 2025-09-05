// Define uma função chamada 'media'.
// Ela aceita três parâmetros numéricos: 'n1', 'n2' e 'n3'.
// ': number' indica que a função retornará um valor do tipo número.
function media(n1: number, n2: number, n3: number): number {
    // A função retorna o resultado da expressão matemática para o cálculo da média.
    // Os parênteses garantem que a soma seja realizada antes da divisão.
    return (n1 + n2 + n3) / 3;
}

// O console.log exibe uma string formatada.
// 1. A função 'media(7, 8, 6)' é chamada primeiro e retorna o número resultante.
// 2. O método '.toFixed(2)' é então chamado SOBRE ESSE RESULTADO para formatá-lo.
// 3. O resultado final (uma string) é inserido na mensagem.
console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);