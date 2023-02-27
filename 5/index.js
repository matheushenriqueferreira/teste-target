const valor = 'Matheus Ferreira';

const inverterValor = (valor) => {
  var valorInvertido = [];
  var j = 0;
  for(i = valor.length - 1; i >= 0; i--) {
    valorInvertido[j] = valor[i].replace(',', '');
    j++;
  }
  return valorInvertido;
}

resultado = inverterValor(valor).toString();

console.log(resultado.replace(/,/g, ''))

