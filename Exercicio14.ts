/**
 * Realiza uma operação aritmética básica entre dois números.
 * @param a O primeiro número.
 * @param b O segundo número.
 * @param op A operação a ser realizada ("+", "-", "*", "/").
 * @returns O resultado da operação ou NaN em caso de erro.
 */
function calculadora(a: number, b: number, op: string): number {
    // Verifica se a operação é de adição
    if (op === "+") {
        return a + b;
    }

    // Verifica se a operação é de subtração
    if (op === "-") {
        return a - b;
    }

    // Verifica se a operação é de multiplicação
    if (op === "*") {
        return a * b;
    }

    // Verifica se a operação é de divisão
    if (op === "/") {
        // Dentro da divisão, verifica o caso especial de divisão por zero
        if (b === 0) {
            console.log("Erro: Divisão por zero.");
            // Retorna "Not a Number" para indicar um resultado matemático inválido
            return NaN; 
        }
        // Se não for divisão por zero, retorna o resultado
        return a / b;
    }

    // Se o código chegar até aqui, nenhum dos 'if' acima foi satisfeito.
    // Isso significa que o operador 'op' não é um dos esperados.
    console.log("Erro: Operador inválido!");
    return NaN; // Retorna NaN para sinalizar o erro
}

// Exemplos de uso da função, imprimindo os resultados no console
console.log(calculadora(10, 5, "+")); // Saída: 15
console.log(calculadora(10, 5, "-")); // Saída: 5
console.log(calculadora(10, 5, "*")); // Saída: 50
console.log(calculadora(10, 5, "/")); // Saída: 2