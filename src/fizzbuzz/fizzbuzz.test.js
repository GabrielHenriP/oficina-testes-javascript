const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz Puzzle', () => {
  test('Deve retornar 0 quando passado 0', () => {
    const resultado = fizzbuzz(0)
    expect(resultado).toEqual(0)
  });

  test('Deve retornar 7 quando passado 7', () => {
    const resultado = fizzbuzz(7)
    expect(resultado).toEqual(7)
  });

  test('Deve retornar fizz quando passado 3', () => {
    const resultado = fizzbuzz(3)
    expect(resultado).toEqual('fizz')
  });

  test('Deve retornar buzz quando passado 5', () => {
    const resultado = fizzbuzz(5)
    expect(resultado).toEqual('buzz')
  });

  test('Deve retornar buzz quando passado 15', () => {
    const resultado = fizzbuzz(15)
    expect(resultado).toEqual('fizzbuzz')
  });

});