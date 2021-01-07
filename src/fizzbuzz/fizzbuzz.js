
function fizzbuzz(numero){
  if(numero !== 0){
    if(numero % 3 == 0 && numero % 5 == 0){
      return 'fizzbuzz'
    }
    if(numero % 3 == 0){
      return 'fizz'
    }
    if(numero % 5 == 0){
      return 'buzz'
    }
  }
  return numero
};

module.exports = fizzbuzz;