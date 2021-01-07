const counterVogal = require('./counterVogal');

describe('Counter Vogals in a string', () => {

  test('Deve retornar um erro quando for passado 0', () => {
    const resultado = counterVogal(0)
    expect(resultado).toEqual('Erro: o parâmetro deve ser ma string')
  });

  test('Deve retornar um erro quando for passado true', () => {
    const resultado = counterVogal(true)
    expect(resultado).toEqual('Erro: o parâmetro deve ser ma string')
  });

  test('Deve retornar "Agua" quando for passado uma "Agua"', () => {
    const resultado = counterVogal('Agua')
    expect(resultado.string).toEqual('Agua')
  });

  test('Deve retornar 6 quando  passado "bshjaakUeIwHGto"', () => {
    const resultado = counterVogal('bshjaakUeIwHGto')
    expect(resultado.NumberOfVogals).toEqual(6);
  });

  test('Deve retornar 8 quando  passado "bshjaak UeIwHGto jbdsjfb kjnsfbkj ofunj"', () => {
    const resultado = counterVogal('bshjaak UeIwHGto jbdsjfb kjnsfbkj ofunj')
    expect(resultado.NumberOfVogals).toEqual(8);
  });
});