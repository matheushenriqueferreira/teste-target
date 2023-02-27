const sp = 67836.43;
const	rj = 36678.66;
const	mg = 29229.88;
const	es = 27165.48;
const	outros = 19849.53;

const valorTotalMensal = sp + rj + mg + es + outros;

const percentualDeRepresentacaoPorEstado = () => {
  const percetualSp = (sp * 100 ) / valorTotalMensal;
  const percetualRj = (rj * 100 ) / valorTotalMensal;
  const percetualMg = (mg * 100 ) / valorTotalMensal;
  const percetualEs = (es * 100 ) / valorTotalMensal;
  const percetualOutros = (outros * 100 ) / valorTotalMensal;
  
  return { percetualSp, percetualRj, percetualMg, percetualEs, percetualOutros };
}

const { percetualSp, percetualRj, percetualMg, percetualEs, percetualOutros } = percentualDeRepresentacaoPorEstado();

console.log(`Percentual de representação em SP: ${percetualSp}%`);
console.log(`Percentual de representação em RJ: ${percetualRj}%`);
console.log(`Percentual de representação em MG: ${percetualMg}%`);
console.log(`Percentual de representação em ES: ${percetualEs}%`);
console.log(`Percentual de representação em Outros estados: ${percetualOutros}%`);