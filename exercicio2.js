// Exercicio de 1 a 10
// 1. Calcular redução do tempo de vida de um fumante:

const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia?"));
const anosFumando = parseInt(prompt("Há quantos anos você fuma?"));

const cigarrosTotais = cigarrosPorDia * anosFumando * 365;
const minutosPerdidos = cigarrosTotais * 10;
const diasPerdidos = minutosPerdidos / (24 * 60);

console.log(`Você perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);

// 2. Verificar multa por velocidade:
const velocidade = parseFloat(prompt("Qual a velocidade do carro em Km/h?"));
const velocidadePermitida = 80;

if (velocidade > velocidadePermitida) {
  const multa = (velocidade - velocidadePermitida) * 5.00;
  console.log("Você foi multado!");
  console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
} else {
  console.log("Velocidade dentro do limite permitido.");
}

// 3. Calcular preço da passagem:
const distancia = parseFloat(prompt("Qual a distância que deseja percorrer em Km?"));
let precoPassagem;

if (distancia <= 200) {
  precoPassagem = distancia * 0.50;
} else {
  precoPassagem = distancia * 0.45;
}

console.log(`O preço da passagem é: R$ ${precoPassagem.toFixed(2)}`);

// 4. Verificar se é possível formar um triângulo:
const ladoA = parseFloat(prompt("Digite o tamanho do primeiro segmento:"));
const ladoB = parseFloat(prompt("Digite o tamanho do segundo segmento:"));
const ladoC = parseFloat(prompt("Digite o tamanho do terceiro segmento:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  console.log("É possível formar um triângulo com esses segmentos.");
} else {
  console.log("Não é possível formar um triângulo com esses segmentos.");
}

// 5. Jogo de JoKenPo (Pedra-Papel-Tesoura):
function jogarJoKenPo() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
  
    console.log(`Você escolheu: ${escolhaJogador}`);
    console.log(`O computador escolheu: ${escolhaComputador}`);
  
    if (escolhaJogador === escolhaComputador) {
      console.log("Empate!");
    } else if (
      (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
      (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
      (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
      console.log("Você ganhou!");
    } else {
      console.log("Você perdeu!");
    }
}
  
jogarJoKenPo();

//6. Jogo de adivinhar o número:
function adivinharNumero() {
    const numeroSorteado = Math.floor(Math.random() * 5) + 1;
    let tentativa;
  
    do {
      tentativa = parseInt(prompt("Tente adivinhar o número entre 1 e 5:"));
      if (tentativa === numeroSorteado) {
        console.log("Parabéns! Você acertou!");
      } else {
        console.log("Você errou. Tente novamente.");
      }
    } while (tentativa !== numeroSorteado);
}
  
adivinharNumero();

// 7. Calcular preço de aluguel de carros:

const tipoCarro = prompt("Digite o tipo de carro (popular ou luxo):").toLowerCase();
const diasAluguel = parseInt(prompt("Digite o número de dias de aluguel:"));
const kmPercorrido = parseFloat(prompt("Digite a quantidade de Km percorridos:"));
let precoTotal = 0;

if (tipoCarro === "popular") {
  precoTotal += diasAluguel * 90.00;
  if (kmPercorrido <= 100) {
    precoTotal += kmPercorrido * 0.20;
  } else {
    precoTotal += 100 * 0.20 + (kmPercorrido - 100) * 0.10;
  }
} else if (tipoCarro === "luxo") {
  precoTotal += diasAluguel * 150.00;
  if (kmPercorrido <= 200) {
    precoTotal += kmPercorrido * 0.30;
  } else {
    precoTotal += 200 * 0.30 + (kmPercorrido - 200) * 0.25;
  }
} else {
  console.log("Tipo de carro inválido.");
}

if (precoTotal > 0) {
  console.log(`O preço total a ser pago é: R$ ${precoTotal.toFixed(2)}`);
}

// 8. Calcular pontos e ganho por atividade física:
const horasAtividade = parseFloat(prompt("Digite o número de horas de atividade física no mês:"));
let pontos = 0;
let ganho = 0;

if (horasAtividade <= 10) {
  pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
  pontos = horasAtividade * 5;
} else {
  pontos = horasAtividade * 10;
}

ganho = pontos * 0.05;

console.log(`Você teve ${horasAtividade} horas de atividade e ganhou ${pontos} pontos.`);
console.log(`Seu ganho total é de: R$ ${ganho.toFixed(2)}`);

// 9. Calcular total de salários por sexo:
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (true) {
  const nome = prompt("Digite o nome do funcionário:");
  const salario = parseFloat(prompt(`Digite o salário de ${nome}:`));
  const sexo = prompt(`Digite o sexo de ${nome} (m/f):`).toLowerCase();

  if (sexo === "m") {
    totalSalarioHomens += salario;
  } else if (sexo === "f") {
    totalSalarioMulheres += salario;
  } else {
    console.log("Sexo inválido.");
  }

  const continuar = prompt("Deseja cadastrar outro funcionário? (s/n)").toLowerCase();
  if (continuar !== "s") {
    break;
  }
}

console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);

// 10. Ler números com "faça enquanto" e mostrar estatísticas:
let soma = 0;
let menorValor = Infinity;
let contador = 0;
let somaPares = 0;
let contadorPares = 0;

do {
  const numero = parseFloat(prompt("Digite um número:"));
  soma += numero;
  contador++;

  if (numero < menorValor) {
    menorValor = numero;
  }

  if (numero % 2 === 0) {
    somaPares += numero;
    contadorPares++;
  }

  const continuar = prompt("Deseja digitar outro número? (s/n)").toLowerCase();
  if (continuar !== "s") {
    break;
  }
} while (true);

const media = contador > 0 ? soma / contador : 0;
const mediaPares = contadorPares > 0 ? somaPares / contadorPares : 0;

console.log(`Somatório de todos os valores: ${soma}`);
console.log(`Menor valor digitado: ${menorValor}`);
console.log(`Média entre todos os valores: ${media.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${contadorPares}`);
