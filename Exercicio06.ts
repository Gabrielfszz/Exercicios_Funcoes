// Define uma função chamada 'dividir'.
// Ela aceita dois parâmetros numéricos 'a' e 'b'.
// A função promete retornar um valor do tipo 'number'.
function dividir(a: number, b: number): number {
    // Inicia uma verificação condicional (if).
    // 'b === 0' verifica se o segundo parâmetro (o divisor) é estritamente igual a zero.
    if (b === 0) {
        // Se a condição for verdadeira, o código dentro deste bloco é executado.
        
        // Exibe uma mensagem de erro no console para informar o usuário.
        console.log("Erro: divisão por zero");

        // Retorna 'NaN' (Not-a-Number). Este é um valor numérico especial em JavaScript/TypeScript
        // que representa um resultado matemático indefinido ou irrepresentável.
        // A função para aqui e não executa a linha de baixo.
        return NaN; 
    }
    
    // Se a condição 'if (b === 0)' for falsa, este código é executado.
    // A função retorna o resultado da divisão de 'a' por 'b'.
    return a / b;
}

// Chama a função 'dividir' com os argumentos 20 e 4.
// O valor retornado (5) é incorporado na template string.
console.log(`Resultado: ${dividir(20, 4)}`);