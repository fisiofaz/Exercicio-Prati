// Exercicio de 10 a 22
// 11. Mostrar os 10 primeiros elementos de uma PA e sua soma:
const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA:"));
const razao = parseFloat(prompt("Digite a razão da PA:"));
let pa = [];
let somaPA = 0;

for (let i = 0; i < 10; i++) {
  const termo = primeiroTermo + i * razao;
  pa.push(termo);
  somaPA += termo;
}

console.log("Os 10 primeiros elementos da PA são:", pa.join(", "));
console.log("A soma dos 10 primeiros elementos da PA é:", somaPA);

// 12. Mostrar os 10 primeiros elementos da Sequência de Fibonacci:
let fibonacci1 = [1, 1];
for (let i = 2; i < 10; i++) {
  fibonacci1.push(fibonacci1[i - 1] + fibonacci1[i - 2]);
}
console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:", fibonacci1.join(", "));

//  13. Preencher vetor com os 15 primeiros elementos de Fibonacci:
let fibonacci2 = [1, 1];
for (let i = 2; i < 15; i++) {
  fibonacci2.push(fibonacci2[i - 1] + fibonacci2[i - 2]);
}
console.log("Os 15 primeiros elementos da Sequência de Fibonacci:", fibonacci2);

// 14. Ler 7 nomes e mostrar em ordem inversa:
let nomes = [];
for (let i = 0; i < 7; i++) {
  const nome = prompt(`Digite o ${i + 1}º nome:`);
  nomes.push(nome);
}
console.log("Nomes em ordem inversa:", nomes.reverse().join(", "));

// 15. Ler 10 números e mostrar os pares e suas posições:
let numeros = [];
for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
  numeros.push(numero);
}

console.log("Números pares digitados e suas posições:");
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(`Número: ${numeros[i]}, Posição: ${i}`);
  }
}

// 16. Preencher vetor com números aleatórios e ordenar:
let vetorAleatorio = [];
for (let i = 0; i < 20; i++) {
  vetorAleatorio.push(Math.floor(Math.random() * 100));
}

console.log("Vetor gerado:", vetorAleatorio);
console.log("Vetor ordenado:", vetorAleatorio.sort((a, b) => a - b));

// 17. Ler nome e idade de 9 pessoas e mostrar menores de idade:
let nomes2 = [];
let idades = [];
for (let i = 0; i < 9; i++) {
  const nome2 = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
  const idade = parseInt(prompt(`Digite a idade de ${nome2}:`));
  nomes2.push(nome2);
  idades.push(idade);
}

console.log("\nPessoas menores de idade:");
for (let i = 0; i < idades.length; i++) {
  if (idades[i] < 18) {
    console.log(`Nome: ${nomes2[i]}, Idade: ${idades[i]}`);
  }
}

//18. Criar e ler registro de funcionário:
let funcionario = {
    nome3: prompt("Digite o nome do funcionário:"),
    cargo: prompt("Digite o cargo do funcionário:"),
    salario: parseFloat(prompt("Digite o salário do funcionário:")),
  };
  
  console.log("\nDados do Funcionário:");
  console.log(`Nome: ${funcionario.nome3}`);
  console.log(`Cargo: ${funcionario.cargo}`);
  console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);

// 19. Ler 5 horários e validar:
function validarHorario(horarioStr) {
    const regex = /^([01]\d|2[0-3])\.([0-5]\d)\.([0-5]\d)$/;
    return regex.test(horarioStr);
  }
  
  let horarios = [];
  for (let i = 0; i < 5; i++) {
    let horario;
    do {
      horario = prompt(`Digite o ${i + 1}º horário no formato HH.MM.SS:`);
      if (!validarHorario(horario)) {
        console.log("Formato de horário inválido. Tente novamente.");
      }
    } while (!validarHorario(horario));
    horarios.push(horario);
}
  
console.log("\nHorários digitados:");
horarios.forEach(h => console.log(h));

// 20. Processar folha de pagamento de 80 empregados:
const funcionarios = [];
for (let i = 0; i < 80; i++) { 
  const matricula = prompt(`Digite a matrícula do ${i + 1}º funcionário:`);
  const nome = prompt(`Digite o nome do ${i + 1}º funcionário:`);
  const salarioBruto = parseFloat(prompt(`Digite o salário bruto de ${nome}:`));
  funcionarios.push({ matricula, nome, salarioBruto });
}

console.log("\nContracheques:");
funcionarios.forEach(funcionario => {
  const descontoINSS = funcionario.salarioBruto * 0.12;
  const salarioLiquido = funcionario.salarioBruto - descontoINSS;
  console.log(`\nMatrícula: ${funcionario.matricula}`);
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${descontoINSS.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
});

// 21. Função para calcular peso ideal:
function calcularPesoIdeal(altura, sexo) {
    if (sexo.toLowerCase() === "m") {
      return 72.7 * altura - 58;
    } else if (sexo.toLowerCase() === "f") {
      return 62.1 * altura - 44.7;
    } else {
      return "Sexo inválido";
    }
}
  
const altura = parseFloat(prompt("Digite sua altura em metros:"));
const sexo = prompt("Digite seu sexo (m/f):");
const pesoIdeal = calcularPesoIdeal(altura, sexo);
console.log(`Seu peso ideal é: ${pesoIdeal}`);

// 22. Função para pesquisa de salário e filhos:
function pesquisaSalarioFilhos() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = -Infinity;
    let pessoasAte350 = 0;
    let numPessoas = 0;
  
    while (true) {
      const salarioStr = prompt("Digite o salário (ou digite 'fim' para encerrar):");
      if (salarioStr === "fim") {
        break;
      }
      const salario = parseFloat(salarioStr);
      if (isNaN(salario)) {
        console.log("Salário inválido. Digite um número ou 'fim'.");
        continue;
      }
  
      const filhosStr = prompt("Digite o número de filhos:");
      const numFilhos = parseInt(filhosStr);
      if (isNaN(numFilhos)) {
        console.log("Número de filhos inválido. Digite um número.");
        continue;
      }
  
      totalSalario += salario;
      totalFilhos += numFilhos;
      numPessoas++;
  
      if (salario > maiorSalario) {
        maiorSalario = salario;
      }
  
      if (salario <= 350.00) {
        pessoasAte350++;
      }
    }
  
    const mediaSalario = numPessoas > 0 ? totalSalario / numPessoas : 0;
    const mediaFilhos = numPessoas > 0 ? totalFilhos / numPessoas : 0;
    const percentualAte350 = numPessoas > 0 ? (pessoasAte350 / numPessoas) * 100 : 0;
  
    return {
      mediaSalario: mediaSalario.toFixed(2),
      mediaFilhos: mediaFilhos.toFixed(2),
      maiorSalario: maiorSalario.toFixed(2),
      percentualAte350: percentualAte350.toFixed(2),
    };
}
  
const resultadosPesquisa = pesquisaSalarioFilhos();
console.log("\nResultados da Pesquisa:");
console.log(`Média de salário da população: R$ ${resultadosPesquisa.mediaSalario}`);
console.log(`Média do número de filhos: ${resultadosPesquisa.mediaFilhos}`);
console.log(`Maior salário: R$ ${resultadosPesquisa.maiorSalario}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${resultadosPesquisa.percentualAte350}%`);
