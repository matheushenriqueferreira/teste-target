const dados = require('./dados.json');

const calcularMediaFaturamento = () => {
  let diasUteis = 0;
  let totalFaturado = 0;

  dados.forEach(element => {
    if(element.valor > 0) {
      totalFaturado += element.valor; 
      diasUteis++;
    }
  })

  return totalFaturado / diasUteis;
}

// Calcular maior e menor valor de faturamento
const calcularFaturamentos = () => {
  let menorValor = dados[0].valor;
  let maiorValor = dados[0].valor;
  
  for(i = 1 ; i< dados.length; i++) {
    if(dados[i].valor > 0) {
      (menorValor > dados[i].valor) && (menorValor = dados[i].valor);
      (maiorValor < dados[i].valor) && (maiorValor = dados[i].valor);
    }
  }
  
  return { maiorValor, menorValor };
} 

const qtdDiasSuperiorMediaMensal = () => {
  const media = calcularMediaFaturamento();
  let dias = 0;
  dados.forEach(element => {
    if(element.valor > 0 && element.valor > media) {
      dias++;
    }
  })
  return dias;
}

const { menorValor, maiorValor } = calcularFaturamentos();

console.log(`• O menor valor de faturamento ocorrido em um dia do mês: R$${menorValor}`);
console.log(`• O maior valor de faturamento ocorrido em um dia do mês: R$${maiorValor}`);
console.log(`• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${qtdDiasSuperiorMediaMensal()}`);



