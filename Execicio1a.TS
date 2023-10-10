//Questão 1 - Criar função que retorne a quantidade de vogais da palavra passada.

function contadorVogais(palavra: string): number {
  // Todas as palavras serão convertidas em minúsculas para que não haja distinção caso a palavra seja digitada em maiúscula
  palavra = palavra.toLowerCase();

  // Iniciando o contador de vogais
  let cont = 0;

  // Especificando as vogais
  const vogais: string[] = ['a', 'e', 'i', 'o', 'u'];

  // Percorrendo os caracteres de acordo com o tamanho da palavra digitada
  for (let p = 0; p < palavra.length; p++) {
    const letra = palavra[p];

    // Avaliando se a letra é uma vogal e incrementando o contador
    if (vogais.includes(letra)) {
      cont++;
    }
  }

  // Retornando o contador de vogais
  return cont;
} // Exemplo de uso com uma palavra recebida via parâmetro da função
const palavra: string = 'Abacate';
const numerodeVogais: number = contadorVogais(palavra);
console.log(`A palavra '${palavra}' tem ${numerodeVogais} vogais.`);
