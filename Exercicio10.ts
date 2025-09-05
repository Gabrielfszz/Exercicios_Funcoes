// Define uma função chamada 'verificarAprovacao'.
// Ela aceita dois parâmetros numéricos: 'nota' e 'faltas'.
// ': string' indica que a função retornará um valor do tipo string ("Aprovado" ou "Reprovado").
function verificarAprovacao(nota: number, faltas: number): string {
    // A condição 'if' verifica duas regras simultaneamente usando o operador '&&' (E lógico).
    // Para o aluno ser aprovado, AMBAS as condições devem ser verdadeiras:
    // 1. 'nota >= 7': A nota deve ser maior ou igual a 7.
    // 2. 'faltas <= 10': O número de faltas deve ser menor ou igual a 10.
    if (nota >= 7 && faltas <= 10) {
        // Se ambas as condições forem verdadeiras, a função retorna a string "Aprovado".
        return "Aprovado";
    } else {
        // Se UMA ou AMBAS as condições forem falsas, o bloco 'else' é executado.
        // A função retorna a string "Reprovado".
        return "Reprovado";
    }
}

// Primeira chamada: nota 8 e 5 faltas.
// Condição: (8 >= 7 && 5 <= 10) -> (true && true) -> true. Retorna "Aprovado".
console.log(verificarAprovacao(8, 5));

// Segunda chamada: nota 6 e 12 faltas.
// Condição: (6 >= 7 && 12 <= 10) -> (false && false) -> false. Retorna "Reprovado".
console.log(verificarAprovacao(6, 12));