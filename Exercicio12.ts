// Define uma função chamada jurosSimples que calcula o valor final (montante)
// de uma aplicação a juros simples.
// @param capital: O valor inicial do investimento (ex: 1000).
// @param taxa: A taxa de juros por período, em formato decimal (ex: 0.05 para 5%).
// @param tempo: O número de períodos que o capital ficará aplicado.
// @returns: O valor do capital inicial somado aos juros (montante).
function jurosSimples(capital: number, taxa: number, tempo: number): number {
    // A fórmula do valor final é: Capital Inicial + Juros.
    // Onde a fórmula dos juros é: Juros = Capital * Taxa * Tempo.
    return capital + (capital * taxa * tempo);
}

// Imprime o resultado da função no console de forma formatada.
console.log(
    // A string `VF = R$ ` será combinada com o resultado da expressão dentro de ${}.
    // `jurosSimples(1000, 0.05, 12)`: Chama a função com os seguintes valores:
    // Capital = 1000
    // Taxa    = 0.05 (ou 5%)
    // Tempo   = 12 períodos
    // O cálculo será: 1000 + (1000 * 0.05 * 12) = 1000 + 600 = 1600.
    //
    // `.toFixed(2)`: Formata o número 1600 para uma string "1600.00", garantindo duas casas decimais.
    `VF = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`
);