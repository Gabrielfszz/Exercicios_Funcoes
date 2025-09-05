// Define uma função chamada 'fatorial'.
// 'n: number' é o número do qual queremos calcular o fatorial.
// ': number' indica que a função retornará um valor numérico.
function fatorial(n: number): number {
    // Inicializa uma variável 'resultado' com o valor 1.
    // Este será o nosso "acumulador", onde guardaremos o produto dos números.
    // Começamos com 1 porque é o elemento neutro da multiplicação.
    let resultado = 1;

    // Inicia um laço de repetição 'for' (loop).
    // 1. Inicialização: 'let i = n' -> Cria um contador 'i' que começa com o valor de 'n'.
    // 2. Condição: 'i > 1' -> O loop continuará executando enquanto 'i' for maior que 1.
    // 3. Decremento: 'i--' -> Ao final de cada iteração, o valor de 'i' é reduzido em 1.
    for (let i = n; i > 1; i--) {
        // Multiplica o valor atual de 'resultado' pelo valor atual de 'i'.
        // É a forma curta de escrever: resultado = resultado * i;
        resultado *= i;
    }

    // Após o loop terminar, a variável 'resultado' conterá o valor do fatorial.
    // A função então retorna este valor.
    return resultado;
}

// Chama a função 'fatorial' com o argumento 5.
// A função calculará 5 * 4 * 3 * 2 e retornará 120.
// O resultado é então exibido no console.
console.log(`Fatorial de 5 = ${fatorial(5)}`);