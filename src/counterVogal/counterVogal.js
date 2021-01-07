function counterVogal(string){
  if (string.constructor == String) {

    let NumberOfVogals = string.toLowerCase().split('')
      .filter( letter => letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
      .length;
    
    
    return { string, NumberOfVogals }
  }

  return 'Erro: o parâmetro deve ser ma string'
}

module.exports = counterVogal;

