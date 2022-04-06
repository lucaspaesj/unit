const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    const test = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(test)).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(test.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof test[0] === "object" && typeof test[1] === "object").toBe(true);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const test2 = productDetails('Refrigerante', 'Água');
    expect(test2[0] !== test2[1]).toBe(true);
    // Teste se os dois productIds terminam com 123.
    // Referência do código abaixo: https://jestjs.io/docs/using-matchers
    expect(test2[0].details.productId && test2[0].details.productId).toMatch(/123/);
  });
});
