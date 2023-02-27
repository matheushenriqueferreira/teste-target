var value = 13;
var fibonacci = [0, 1];

for(i = 1; i <= value; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
}

fibonacci.includes(value) ?
  console.log(`O valor ${value} PERTENCE a sequência de Fibonacci: (${fibonacci})`)
  :
  console.log(`O valor ${value} NÃO PERTENCE a sequência de Fibonacci: (${fibonacci})`);
