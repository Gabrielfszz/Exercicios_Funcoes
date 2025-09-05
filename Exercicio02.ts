// Define uma função chamada 'dizerOla'.
// 'nome: string' declara um parâmetro chamado 'nome' que deve ser do tipo string.
// ': void' indica que a função não retorna nenhum valor.
function dizerOla(nome: string): void {
    // O corpo da função usa uma template string (com backticks ``)
    // para incorporar a variável 'nome' na mensagem.
    // 'console.log()' exibe a saudação formatada no console.
    console.log(`Olá, ${nome}!`);
}

// Chamando a função 'dizerOla' com o argumento "Eduardo".
// O valor "Eduardo" será atribuído ao parâmetro 'nome' dentro da função.
dizerOla("Eduardo");

// Chamando a função 'dizerOla' novamente com o argumento "Pietro".
// O valor "Pietro" será atribuído ao parâmetro 'nome' desta vez.
dizerOla("Pietro");