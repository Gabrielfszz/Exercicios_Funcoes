// Define uma função que converte uma temperatura de Celsius para Fahrenheit.
// @param c: A temperatura em graus Celsius (um número).
// @returns: A temperatura equivalente em graus Fahrenheit (um número).
function celsiusparaFahrenheit(c: number): number {
    // Aplica a fórmula de conversão: Multiplica o valor em Celsius por 1.8 e soma 32.
    return c * 1.8 + 32;
}

// Exibe o resultado da conversão no console.
console.log(
    // Usa uma template literal (crases) para construir a string de saída.
    // A expressão ${...} será substituída pelo valor que ela retornar.
    //
    // 1. A função `celsiusparaFahrenheit` é chamada com o valor 25.
    // 2. O cálculo realizado é: 25 * 1.8 + 32 = 45 + 32 = 77.
    // 3. O número 77 substitui a expressão ${...} na string.
    `25°C = ${celsiusparaFahrenheit(25)}°F`
);